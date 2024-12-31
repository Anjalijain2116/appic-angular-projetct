import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor(private injector: Injector) {}

  handleError(error: any): void {
    const router = this.injector.get(Router);

    if (error instanceof HttpErrorResponse) {
      // Server error
      console.error('Server error:', error);
    } else {
      // Client Error
      console.error('Client error:', error);
    }

    // Navigate to error page
    router.navigate(['/error']);
  }
}