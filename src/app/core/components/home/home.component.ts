import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { QouteComponent } from '../qoute/qoute.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, QouteComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
