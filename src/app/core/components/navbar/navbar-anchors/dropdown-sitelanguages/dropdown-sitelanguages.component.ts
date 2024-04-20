import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-sitelanguages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown-sitelanguages.component.html',
  styleUrl: './dropdown-sitelanguages.component.scss',
})
export class DropdownSitelanguagesComponent {
  siteInitLang: string = 'EN';
  restSiteLangs: string[] = ['RU', 'UA'];
  isDropDownOpen!: boolean;
  @Input() isNavbarOpen: Boolean = true;
  openLangDropdown(e: any): void {
    if (this.isDropDownOpen == true) {
      this.isDropDownOpen = false;
    } else {
      this.isDropDownOpen = true;
    }
    this.changeSiteLang(e);
  }

  changeSiteLang(e: any): void {
    if (e.target.innerText != this.siteInitLang && e.target.innerText != '') {
      const currentLang = this.siteInitLang;
      const changedLanguage = e.target.innerText;
      e.target.innerHTML = currentLang;
      this.siteInitLang = changedLanguage;
    }
  }
}
