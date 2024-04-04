import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss',
})
export class QuoteComponent implements OnInit {
  constructor(private _breakpointObserver: BreakpointObserver) {}
  mobileMedia: boolean = false;
  ngOnInit() {
    this.handleMobile();
  }

  handleMobile() {
    this._breakpointObserver
      .observe(Breakpoints.HandsetPortrait)
      .subscribe((result) => {
        if (result.matches) {
          this.mobileMedia = true;
        } else {
          this.mobileMedia = false;
        }
      });
  }
}
