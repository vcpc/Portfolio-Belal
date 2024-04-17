import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
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
    this.handleMobile();
  }

  handleMobile(): void {
    this._breakpointObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.Small])
      .subscribe((result) => {
        if (result.matches) {
          if (result.breakpoints[Breakpoints.HandsetPortrait]) {
            this.isHandsetPortrait = true;
            this.isSmall = false;
          }
          if (result.breakpoints[Breakpoints.Small]) {
            this.isSmall = true;
            this.isHandsetPortrait = false;
          }
        } else {
          this.isHandsetPortrait = false;
          this.isSmall = false;
        }
      });
  }
}
