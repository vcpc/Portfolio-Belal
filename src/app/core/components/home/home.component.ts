import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { QuoteComponent } from './quote/quote.component';
import { HeroComponent } from '../../../hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, QuoteComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
