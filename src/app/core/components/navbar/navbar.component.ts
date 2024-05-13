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
  /** detect if navbar expend or not in small screens
   * @see {@link expendNavBar}
   */
  isHandsetPortrait!: Boolean;

  /** help handle ui in small screens
   * when navbar open @see {@link onOpenNavBarClick}
   * when navbar close @see {@link onCloseNavbarClick}
   * when anchor selected @see {@link onLinksExpendedNavbarClick}
   */
  isNavbarOpen!: Boolean;

  /** To detect current user screen width once open the site and even if user change display width */
  ngAfterViewInit(): void {
    this.getUserScreenWidth();
  }

  /** Detect current user screen width even if user change display width */
  getUserScreenWidth(): void {
    this._BreakpointObserver
      .observe(Breakpoints.HandsetPortrait)
      .subscribe((screenWidth) => {
        this.expendNavBar(screenWidth);
      });
  }

  /** Expend Navbar
   * @param screenWidth - current screen width
   * change Boolean Flag isHandsetPortrait depend on current display width
   * use setTimeout to avoid error of value hasbeen changed after checked
   * using else with if condition with calling @see {@link onCloseNavbarClick} to avoid keep navbar open if user change screen display from sm to md or large
   */
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

  /** using with burger button to open navbar and change display ui */
  onOpenNavBarClick(): void {
    this.isNavbarOpen = true;
  }

  /** using with close button to open navbar and change display ui */
  onCloseNavbarClick(): void {
    this.isNavbarOpen = false;
  }

  /** using with child component to close navbar after select any link
   * @param isNavbarLinksClicked emitted from child component
   * @see {@link NavbarAnchorsComponent}
   */
  onLinksExpendedNavbarClick(isNavbarLinksClicked: Boolean) {
    this.isNavbarOpen = isNavbarLinksClicked;
  }
}
