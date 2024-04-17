import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-site-language',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './site-language.component.html',
  styleUrl: './site-language.component.scss',
})
export class SiteLanguageComponent {
  siteLang: string = 'EN';
  isLangDropDownOpen: Boolean = false;
  @Input() isHandsetPortrait: boolean = true;

  onClickOpenLangDropdown(): void {
    this.animateLangChevron();
  }

  onClickChangeSiteLang(e: any): void {
    const currentLang = this.siteLang;
    const changedLanguage = e.target.innerHTML;
    e.target.innerHTML = currentLang;
    this.siteLang = changedLanguage;
    this.onClickCloseLangDropDown();
  }

  animateLangChevron(): void {
    if (this.isLangDropDownOpen == false) {
      this.isLangDropDownOpen = true;
    } else {
      this.isLangDropDownOpen = false;
    }
  }

  onClickCloseLangDropDown(): void {
    this.animateLangChevron();
  }
}
