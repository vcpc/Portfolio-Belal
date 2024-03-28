import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements AfterViewInit {
  constructor(
    private _BreakpointObserver: BreakpointObserver,
    private _Renderer2: Renderer2
  ) {}

  navbarShowFlag: boolean = true;
  closeNavBar(navbar: HTMLElement, navbarList: HTMLUListElement): void {
    navbar.classList.remove('show');
    navbarList.classList.add('d-none');
    this.navbarShowFlag = true;
  }
  openNavBar(navbar: HTMLElement, navbarList: HTMLUListElement): void {
    navbarList.classList.remove('d-none');
    navbar.classList.add('show');
    this.navbarShowFlag = false;
  }

  @ViewChild('navbar') navbar!: ElementRef;
  @ViewChild('navbarList') navbarList!: ElementRef;

  ngAfterViewInit(): void {
    this._BreakpointObserver
      .observe(Breakpoints.HandsetPortrait)
      .subscribe((result) => {
        console.log(result);
        if (!result.matches) {
          this.navbarShowFlag = true;
          this._Renderer2.removeClass(this.navbar.nativeElement, 'show');
          this._Renderer2.addClass(this.navbarList.nativeElement, 'd-none');
        }
      });
  }
}
