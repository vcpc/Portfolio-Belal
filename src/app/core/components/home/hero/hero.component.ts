import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
/**
 * Hero component
 * @author Marwan.A
 */
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  /**
   * Flag indicating whether the viewport is in handset portrait mode.
   */
  isHandsetPortrait: boolean = false;

  /**
   * @param _breakpointObserver BreakpointObserver service for detecting viewport changes.
   */
  constructor(private _breakpointObserver: BreakpointObserver) {}

  /**
   * Initialize the component and start observing the handset portrait breakpoint.
   * @returns {void}
   */
  ngOnInit(): void {
    this.HandsetPortraitBreakpoint();
  }

  /**
   * Observe the handset portrait breakpoint and update the ,"isHandsetPortrait" flag accordingly when the user change display at screen.
   * @returns {void}
   */
  HandsetPortraitBreakpoint(): void {
    this._breakpointObserver
      .observe(Breakpoints.HandsetPortrait)
      .subscribe((result) => {
        this.updateHandsetPortrait(result.matches);
      });
  }

  /**
   * Update the "isHandsetPortrait" flag based on the given matches value.
   * @param matches A boolean value indicating whether the viewport is in handset portrait mode.
   * @returns {void}
   */
  updateHandsetPortrait(matches: boolean): void {
    this.isHandsetPortrait = matches;
  }
}
