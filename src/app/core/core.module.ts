import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QouteComponent } from './components/qoute/qoute.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, QouteComponent],
  exports: [QouteComponent],
})
export class CoreModule {}
