import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints,
} from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarAnchorsComponent } from './navbar-anchors/navbar-anchors.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink, NavbarAnchorsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements AfterViewInit {
  constructor(private _BreakpointObserver: BreakpointObserver) {}

  isHandsetPortrait!: Boolean;

  isNavbarOpen!: Boolean;

  ngAfterViewInit(): void {
    this.getUserScreenWidth();
  }

  getUserScreenWidth(): void {
    this._BreakpointObserver
      .observe(Breakpoints.HandsetPortrait)
      .subscribe((screenWidth) => {
        this.expendNavBar(screenWidth);
      });
  }

  expendNavBar(screenWidth: BreakpointState): void {
    if (screenWidth.matches) {
      setTimeout(() => {
        this.isHandsetPortrait = true;
      }, 0);
    } else if (!screenWidth.matches) {
      setTimeout(() => {
        this.isHandsetPortrait = false;
        this.onCloseNavbarClick();
      }, 0);
    }
  }

  onOpenNavBarClick(): void {
    this.isNavbarOpen = true;
  }

  onCloseNavbarClick(): void {
    this.isNavbarOpen = false;
  }

  onLinksExpendedNavbarClick(isNavbarLinksClicked: Boolean) {
    this.isNavbarOpen = isNavbarLinksClicked;
  }
}
