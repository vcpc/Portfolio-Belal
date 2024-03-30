import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { QouteComponent } from './components/qoute/qoute.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, HomeComponent],
  exports: [HomeComponent],
})
export class CoreModule {}
