import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedialineComponent } from './components/medialine/medialine.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, MedialineComponent, NavbarComponent, FooterComponent],
  exports: [MedialineComponent, NavbarComponent, FooterComponent ],
})
export class CoreModule {}
