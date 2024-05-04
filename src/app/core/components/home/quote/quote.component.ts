import { Component, OnInit } from '@angular/core';
import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints,
} from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

/**
 * Quote component
 * @author Marwan.A
 */
@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent implements OnInit {
  /**
   * Flag indicating whether the viewport is in `handsetPortrait` mode.
   */
  isHandsetPortrait: boolean = false;

  /**
   * Flag indicating whether the viewport is in `small` mode.
   */
  isSmall: boolean = false;

  /**
   * @param _breakpointObserver BreakpointObserver service for detecting viewport changes.
   */
  constructor(private _breakpointObserver: BreakpointObserver) {}

  /**
   * Initialize the component and start observing the `HandsetPortrait` and `Small` breakpoints.
   */
  ngOnInit(): void {
    this.updateViewportFlags(this.handleBreakpoints());
  }

  /**
   * Observe the `HandsetPortrait` and `Small` breakpoints and return an Observable of BreakpointState.
   */
  handleBreakpoints(): Observable<BreakpointState> {
    return this._breakpointObserver.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.Small,
    ]);
  }

  /**
   * Update the `isHandsetPortrait` and `isSmall` flags based on the given Observable of BreakpointState.
   */
  updateViewportFlags(Observable: Observable<BreakpointState>): void {
    Observable.subscribe((result) => {
      if (result.matches) {
        this.updateFlagsForMatches(result.breakpoints);
      } else {
        this.resetFlags();
      }
    });
  }

  /**
   * Update the `isHandsetPortrait` and `isSmall` flags based on the given breakpoints.
   */
  updateFlagsForMatches(breakpoints: { [key: string]: boolean }): void {
    this.isHandsetPortrait = breakpoints[Breakpoints.HandsetPortrait];
    this.isSmall = breakpoints[Breakpoints.Small];
  }

  /**
   * Reset the `isHandsetPortrait` and `isSmall` flags to false in another media.
   */
  resetFlags(): void {
    this.isHandsetPortrait = false;
    this.isSmall = false;
  }
}
