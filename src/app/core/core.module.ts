import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedialineComponent } from './components/medialine/medialine.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, MedialineComponent, NavbarComponent, HomeComponent],
  exports: [MedialineComponent, NavbarComponent, HomeComponent],
})
export class CoreModule {}
