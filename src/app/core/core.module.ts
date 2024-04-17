import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedialineComponent } from './components/medialine/medialine.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { QuoteComponent } from './components/home/quote/quote.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MedialineComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    QuoteComponent,
  ],
  exports: [
    MedialineComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    QuoteComponent,
  ],
})
export class CoreModule {}
