import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  handsetPortrait: boolean = false;

  constructor(private _breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.handleMobile();
  }

  handleMobile() {
    this._breakpointObserver
      .observe(Breakpoints.HandsetPortrait)
      .subscribe((result) => {
        if (result.matches) {
          this.handsetPortrait = true;
        } else {
          this.handsetPortrait = false;
        }
      });
  }
}
