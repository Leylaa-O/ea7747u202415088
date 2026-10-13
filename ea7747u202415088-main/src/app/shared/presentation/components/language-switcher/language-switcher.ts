import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageStore } from '../../../application/language.store';
import { LanguageCode, SUPPORTED_LANGUAGES } from '../../../domain/model/language-code';

@Component({
  selector: 'app-language-switcher',
  imports: [MatButtonToggleModule, TranslatePipe],
  templateUrl: './language-switcher.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageSwitcherComponent {
  protected readonly languageStore = inject(LanguageStore);
  protected readonly languages = SUPPORTED_LANGUAGES;

  protected onLanguageChange(language: LanguageCode): void {
    this.languageStore.change(language);
  }

  protected readonly LanguageStore = LanguageStore;
}
