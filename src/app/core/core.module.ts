import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedialineComponent } from './components/medialine/medialine.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuoteComponent } from './components/quote/quote.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, MedialineComponent, NavbarComponent, QuoteComponent],
  exports: [MedialineComponent, NavbarComponent, QuoteComponent],
})
export class CoreModule {}
