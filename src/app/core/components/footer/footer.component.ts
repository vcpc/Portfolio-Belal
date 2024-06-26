import { AfterViewInit, ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements AfterViewInit {
  closedNavBarFlag:boolean = true
  constructor (private _BreakpointObserver:BreakpointObserver , private cdr:ChangeDetectorRef) {}

ngAfterViewInit(): void {
  
  this._BreakpointObserver.observe(Breakpoints.HandsetPortrait).subscribe((result) => {
    if (result.matches) {
      this.closedNavBarFlag = true
    } else if (!result.matches) {
      this.closedNavBarFlag = false
    }
    this.cdr.detectChanges()
  })

}

}
