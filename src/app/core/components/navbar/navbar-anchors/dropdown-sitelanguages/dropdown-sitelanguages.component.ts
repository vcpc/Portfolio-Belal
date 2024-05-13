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
  /**
   * @property {string} siteInitLang the defult sitelanguage
   */
  siteInitLang: string = 'EN';
  /**
   * @property {string[]} restSiteLangs the rest site languages
   */
  restSiteLangs: string[] = ['RU', 'UA'];
  /**
   * @property {boolean} isDropDownOpen use to control css classes to handle animation
   */
  isDropDownOpen!: boolean;
  /**
   * @property {boolean} isNavbarOpen Input to handle navbar padding in small screen with the rest navbar anchors
   */
  @Input() isNavbarOpen: Boolean = true;
  /**
   *
   * @param e passing the current site lang for {@link changeSiteLang} to handle current lang with the choosen lang
   */
  onDropDownClick(e: any): void {
    if (this.isDropDownOpen == true) {
      this.isDropDownOpen = false;
    } else {
      this.isDropDownOpen = true;
    }
    this.changeSiteLang(e);
  }
  /**
   *
   * @param e recieve the value for the current site lang and toggle it (just display)
   */
  changeSiteLang(e: any): void {
    if (e.target.innerText != this.siteInitLang && e.target.innerText != '') {
      const currentLang = this.siteInitLang;
      const changedLanguage = e.target.innerText;
      e.target.innerHTML = currentLang;
      this.siteInitLang = changedLanguage;
    }
  }
}
