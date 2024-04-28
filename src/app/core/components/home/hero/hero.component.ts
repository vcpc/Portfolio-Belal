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
    this.HandsetPortraitBreakpoint();
  }

  HandsetPortraitBreakpoint(): void {
    this._breakpointObserver
      .observe(Breakpoints.HandsetPortrait)
      .subscribe((result) => {
        this.updateHandsetPortrait(result.matches);
      });
  }
  updateHandsetPortrait(matches: boolean): void {
    this.isHandsetPortrait = matches;
  }
}
