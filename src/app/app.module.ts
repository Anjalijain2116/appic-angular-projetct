import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { LayoutsModule } from './layouts/layouts.module';
import { PagesModule } from './pages/pages.module';
import { ApiService } from './core/services/api.service';
import { ApiInterceptor } from './core/interceptors/api.interceptor';
import { postsReducer } from './state/posts.reducer';
import { PostsEffects } from './state/posts.effects';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { FeatureModule } from './features/feature/feature.module';
import { GlobalErrorHandlerService } from './core/services/global-error-handler.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { FeatureComponent } from './features/feature/feature/feature.component';

// import { IfLoggedInDirective } from './core/directives/if-logged-in.directive';
// import { HighlightDirective } from './core/directives/highlight.directive';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
   
    // IfLoggedInDirective,
    // HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    RouterModule,
    RouterLink,
    RouterOutlet,
    PagesModule,
    HttpClientModule,
    StoreModule.forRoot({posts: postsReducer}),
    EffectsModule.forRoot([PostsEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    CoreModule,
    SharedModule,
    FeatureModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    provideClientHydration(),
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
