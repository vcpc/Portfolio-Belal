import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints,
} from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SiteLanguageComponent } from './site-language/site-language.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink, SiteLanguageComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements AfterViewInit {
  constructor(
    private _BreakpointObserver: BreakpointObserver,
    private _Renderer2: Renderer2
  ) {}

  isHandsetPortrait: boolean = true;
  isNavBarOpen: boolean = false;

  @ViewChild('navbar') navbar!: ElementRef;
  @ViewChild('navbarList') navbarList!: ElementRef;

  ngAfterViewInit(): void {
    this.getScreenWidth();
  }

  getScreenWidth(): void {
    this._BreakpointObserver
      .observe(Breakpoints.HandsetPortrait)
      .subscribe((HandsetPortrait) => {
        this.changeNavBarClasses(HandsetPortrait);
      });
  }

  changeNavBarClasses(HandsetPortrait: BreakpointState): void {
    if (HandsetPortrait.matches) {
      setTimeout(() => {
        this.isNavBarOpen = true;
      }, 0);
    } else if (!HandsetPortrait.matches) {
      this.isHandsetPortrait = true;
      this.isNavBarOpen = false;
    }
  }

  onClickOpenNavBar(): void {
    this._Renderer2.removeClass(this.navbarList.nativeElement, 'd-none');
    this._Renderer2.addClass(this.navbar.nativeElement, 'show');
    this.isNavBarOpen = false;
    this.isHandsetPortrait = false;
  }

  onClickCloseNavbar(): void {
    this._Renderer2.removeClass(this.navbar.nativeElement, 'show');
    this._Renderer2.addClass(this.navbarList.nativeElement, 'd-none');
    this.isHandsetPortrait = true;
    this.isNavBarOpen = true;
  }
}
