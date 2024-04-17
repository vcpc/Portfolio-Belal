import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  isHandsetPortrait: boolean = false;

  /**
   *@param {BreakpointObserver} _breakpointObserver
   */
  constructor(private _breakpointObserver: BreakpointObserver) {}

  /**
   * @returns {void}
   * @author Marwan.A
   */
  ngOnInit(): void {
    this.handleMobile();
  }

  /**
   * Observes the device's screen size and sets the `isHandsetPortrait` property accordingly.
   * Subscribes to changes in the screen size and updates `isHandsetPortrait` accordingly.
   *
   * @param Breakpoints - The breakpoints to observe
   * @returns {void}
   * @author Marwan.A
   * @link https://blog.angular-university.io/angular-responsive-design/
   */
  handleMobile(): void {
    this._breakpointObserver
      .observe(Breakpoints.HandsetPortrait)
      .subscribe((result) => {
        if (result.matches) {
          this.isHandsetPortrait = true;
        } else {
          this.isHandsetPortrait = false;
        }
      });
  }
}
