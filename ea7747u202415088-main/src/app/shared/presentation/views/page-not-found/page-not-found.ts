import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-page-not-found-view',
  imports: [MatButtonModule, RouterLink, TranslatePipe],
  template: `
    <section aria-labelledby="not-found-title" role="alert">
      <h1 id="not-found-title">{{ 'notFound.title' | translate }}</h1>
      <p>{{ 'notFound.message' | translate: { path: requestedPath } }}</p>
      <a mat-flat-button routerLink="/home">{{ 'notFound.back' | translate }}</a>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageNotFoundView {
  protected readonly requestedPath = inject(Router).url;
}
