import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data = ['Item 1', 'Item 2', 'Item 3'];

  getData(): Observable<string[]> {
    return of(this.data).pipe(
      delay(1000), // Simulate a delay
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError('Something went wrong; please try again later.');
  }
}