import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor(
    private translate: TranslateService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.translate.addLangs(['en', 'ar']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang() || 'en';
    this.translate.use(browserLang.match(/en|ar/) ? browserLang : 'en');
  }

  setLanguage(lang: string): void {
    this.translate.use(lang);
    this.document.documentElement.lang = lang;
    if (lang === 'ar') {
      this.document.documentElement.dir = 'rtl';
    } else {
      this.document.documentElement.dir = 'ltr';
    }
  }
}