import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DEFAULT_LANGUAGE, LanguageCode } from '../domain/model/language-code';

@Injectable({ providedIn: 'root' })
export class LanguageStore {
  private readonly translate = inject(TranslateService);
  private readonly document = inject(DOCUMENT);
  private readonly currentState = signal<LanguageCode>(DEFAULT_LANGUAGE);

  readonly current = this.currentState.asReadonly();

  change(language: LanguageCode): void {
    this.translate.use(language);
    this.document.documentElement.lang = language;
    this.currentState.set(language);
  }
}
