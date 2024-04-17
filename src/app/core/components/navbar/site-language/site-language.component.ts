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
  /**
   * @property {string} siteLang - the init language for the site
   * @author Muhamed Hajajii
   */
  siteLang: string = 'EN';

  /**
   * @property {Boolean} isLangDropDownOpen
   * @see {@link animateLangChevron()}
   * - Show and Hide the dropdown menu (Using SCSS Class 'show')
   * - Play the animate for the chevron
   * @author Muhamed Hajajii
   */
  isLangDropDownOpen: Boolean = false;

  /**
   * @property {Boolean} isHandsetPortrait - handle padding in different screen width with the navbar li
   * @author Muhamed Hajajii
   */
  @Input() isHandsetPortrait: boolean = true;

  /**
   * Open language drop down menu
   * @author Muhamed Hajajii
   */
  onClickOpenLangDropdown(): void {
    this.animateLangChevron();
  }
  /**
   * Close language drop down menu
   * @author Muhamed Hajajii
   */
  onClickCloseLangDropDown(): void {
    this.animateLangChevron();
  }
  /**
   * Change the current site language with the new language
   * @param e - event to know which elemnt user selected
   * @author Muhamed Hajajii
   */
  onClickChangeSiteLang(e: any): void {
    const currentLang = this.siteLang;
    const changedLanguage = e.target.innerHTML;
    e.target.innerHTML = currentLang;
    this.siteLang = changedLanguage;
    this.onClickCloseLangDropDown();
  }
  /**
   * animate the chevron svg while the dropdown menu appearing
   * @author Muhamed Hajajii
   */
  animateLangChevron(): void {
    if (this.isLangDropDownOpen == false) {
      this.isLangDropDownOpen = true;
    } else {
      this.isLangDropDownOpen = false;
    }
  }
}
