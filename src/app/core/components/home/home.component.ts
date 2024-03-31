import { Component } from '@angular/core';
import { QouteComponent } from '../qoute/qoute.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [QouteComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
