import { Component, OnInit } from '@angular/core';
import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints,
} from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss',
})
export class QuoteComponent implements OnInit {
  constructor(private _breakpointObserver: BreakpointObserver) {}

  isHandsetPortrait: boolean = false;
  isSmall: boolean = false;

  ngOnInit(): void {
    this.handleBreakpoints();
  }
  handleBreakpoints(): void {
    this._breakpointObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.Small])
      .subscribe((result) => {
        this.updateViewportFlags(result);
      });
  }

  updateViewportFlags(result: BreakpointState): void {
    if (result.matches) {
      this.updateFlagsForMatches(result.breakpoints);
    } else {
      this.resetFlags();
    }
  }

  updateFlagsForMatches(breakpoints: { [key: string]: boolean }): void {
    this.isHandsetPortrait = breakpoints[Breakpoints.HandsetPortrait];
    this.isSmall = breakpoints[Breakpoints.Small];
  }

  resetFlags(): void {
    this.isHandsetPortrait = false;
    this.isSmall = false;
  }
}
