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
  mobileMedia: boolean = false;
  minSmallMedia: boolean = false;
  ngOnInit() {
    this.handleMobile();
  }

  handleMobile() {
    this._breakpointObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.Small])
      .subscribe((result) => {
        if (result.matches) {
          if (result.breakpoints[Breakpoints.HandsetPortrait]) {
            this.mobileMedia = true;
            this.minSmallMedia = false;
          }
          if (result.breakpoints[Breakpoints.Small]) {
            this.minSmallMedia = true;
            this.mobileMedia = false;
          }
        } else {
          this.mobileMedia = false;
          this.minSmallMedia = false;
        }
      });
  }
}
