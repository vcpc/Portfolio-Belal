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

  constructor(private _breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.handleMobile();
  }

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
