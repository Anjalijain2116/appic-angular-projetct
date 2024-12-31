import { Component } from '@angular/core';
import { LanguageService } from './core/services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'appic-angular-task';
  constructor(private languageService: LanguageService) {
    // this.languageService.setInitialAppLanguage();
  }
  switchLanguage(lang: string): void {
    this.languageService.setLanguage(lang);
  }
}
