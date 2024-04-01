import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedialineComponent } from './components/medialine/medialine.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, MedialineComponent, NavbarComponent],
  exports: [MedialineComponent , NavbarComponent],
})
export class CoreModule {}
