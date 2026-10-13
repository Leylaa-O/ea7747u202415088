import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { map } from 'rxjs';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher';
import { NAVIGATION_ITEMS } from '../navigation-items';

@Component({
  selector: 'layout',
  imports: [
    RouterOutlet, RouterLink, RouterLinkActive, MatToolbarModule, MatSidenavModule,
    MatListModule, MatIconModule, MatButtonModule, TranslatePipe, LanguageSwitcherComponent
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppShellComponent {
  private readonly breakpointObserver = inject(BreakpointObserver);

  protected readonly navigationItems = NAVIGATION_ITEMS;

  private readonly isHandset = toSignal(
    this.breakpointObserver.observe(Breakpoints.Handset).pipe(map((state) => state.matches)),
    { initialValue: false }
  );
  private readonly manualToggle = signal<boolean | null>(null);
  protected readonly sidenavMode = computed(() => (this.isHandset() ? 'over' : 'side'));

  protected readonly sidenavOpened = computed(() => this.manualToggle() ?? !this.isHandset());

  protected toggleSidenav(): void {
    this.manualToggle.set(!this.sidenavOpened());
  }

  protected onOpenedChange(opened: boolean): void {
    this.manualToggle.set(opened);
  }
}
