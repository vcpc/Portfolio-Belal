import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DropdownSitelanguagesComponent } from './dropdown-sitelanguages/dropdown-sitelanguages.component';

@Component({
  selector: 'app-navbar-anchors',
  standalone: true,
  imports: [
    CommonModule,
    DropdownSitelanguagesComponent,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './navbar-anchors.component.html',
  styleUrl: './navbar-anchors.component.scss',
})
export class NavbarAnchorsComponent {
  @Input() isHandsetPortrait!: Boolean;
  @Input() isNavbarOpen!: Boolean;
  @Output() isNavbarLinksClicked = new EventEmitter<Boolean>();

  onCloseNavbarClick() {
    this.isNavbarLinksClicked.emit(false);
  }
}
