import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { QuoteComponent } from './components/quote/quote.component';

@NgModule({
  declarations: [HomeComponent, QuoteComponent],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class CoreModule {}
