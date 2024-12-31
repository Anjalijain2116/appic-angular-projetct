import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'authToken';

  constructor() {}

  login(username: string, password: string): Observable<any> {
    // Mock authentication logic
    if (username === 'user' && password === 'password') {
      const token = 'mock-jwt-token';
      return of({ token }).pipe(
        delay(1000), // Simulate network delay
        tap(response => this.setToken(response.token)),
        catchError(this.handleError)
      );
    } else {
      return throwError('Invalid username or password').pipe(
        delay(1000) // Simulate network delay
      );
    }
  }

  logout(): void {
    this.clearToken();
  }

  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  private clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }
}