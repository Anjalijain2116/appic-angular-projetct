import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { ApiService } from '../../core/services/api.service';
import {Store} from '@ngrx/store';
import {loadPosts} from '../../state/posts.action';
import {selectAllPosts, selectPostsError} from '../../state/posts.selectors';
import {Observable} from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { formatDate, formatNumber } from '@angular/common';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  data: string[] | undefined;
  error: string | undefined;
  posts!: any[];
  error1!:string;
  posts$!: Observable<any[]>;
  errors$!: Observable<any>;
  currentDate!: string;
  formattedNumber!: string;

  constructor(private dataService: DataService, 
    private apiService: ApiService,
    private authService: AuthService,
    private languageService: LanguageService,
    private store: Store) {}

  ngOnInit(): void {
    const locale = 'en-US';
    this.dataService.getData().subscribe(
      (data) => this.data = data,
      (error) => this.error = error
    );
    this.apiService.getPosts().subscribe(
      (posts) => this.posts = posts,
      (error) => this.error1 = error
    );
    this.store.dispatch(loadPosts());
    this.posts$ = this.store.select(selectAllPosts);
    this.errors$ = this.store.select(selectPostsError);
    this.currentDate = formatDate(new Date(), 'fullDate', locale);
    this.formattedNumber = formatNumber(1234567.89, locale, '1.2-2');
  }
  trackByFn(index: number, item: any): number {
    return item.id; // or any unique identifier
  }
  logout(): void {
    
    this.authService.logout();
  }
  isAuthenticated(): boolean {
    if (typeof localStorage === 'undefined') {
      return false;
    }
    return !!localStorage.getItem('authToken');
  }
  switchLanguage(lang: string): void {
    this.languageService.setLanguage(lang);
  }
}
