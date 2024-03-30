import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements AfterViewInit {
  navbarShowFlag: boolean = true;
  siteLang: string = 'EN';
  constructor(
    private _BreakpointObserver: BreakpointObserver,
    private _Renderer2: Renderer2
  ) {}
  @ViewChild('navbar') navbar!: ElementRef;
  @ViewChild('navbarList') navbarList!: ElementRef;
  @ViewChildren('navbar__link')
  navbar__link!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    this.closeNavBarBox();
  }

  activeBtn(navbar: HTMLElement, navbarList: HTMLUListElement, e: any): void {
    this.navbar__link.toArray().forEach((el) => {
      this._Renderer2.removeClass(el.nativeElement, 'active');
    });
    e.target.classList.add('active');
    navbar.classList.remove('show');
    navbarList.classList.add('d-none');
    this.navbarShowFlag = true;
  }

  closeNavBarBox(): void {
    this._BreakpointObserver
      .observe(Breakpoints.HandsetPortrait)
      .subscribe((result) => {
        if (!result.matches) {
          this.navbarShowFlag = true;
          this._Renderer2.removeClass(this.navbar.nativeElement, 'show');
          this._Renderer2.addClass(this.navbarList.nativeElement, 'd-none');
        }
      });
  }
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
  openLangDropdown(el: HTMLDivElement, langChevron: HTMLDivElement): void {
    el.classList.toggle('show');
    el.classList.toggle('d-none');
    langChevron.classList.toggle('show');
  }
  closeLangDropdown(
    el: HTMLDivElement,
    langChevron: HTMLDivElement,
    e: any
  ): void {
    const currentLang = this.siteLang;
    const changedLanguage = e.target.innerHTML;
    e.target.innerHTML = currentLang;
    this.siteLang = changedLanguage;
    el.classList.remove('show');
    el.classList.add('d-none');
    langChevron.classList.remove('show');
  }
}
