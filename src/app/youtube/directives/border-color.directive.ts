import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBorderColor]',
})
export class BorderColorDirective implements AfterViewInit {
  constructor(public elRef: ElementRef) {}

  ngAfterViewInit() {
    const publishedAt = this.elRef.nativeElement.dataset.date;
    const now = new Date();
    if (publishedAt) {
      const date = new Date(publishedAt);
      const timeDifferenceInMs = now.getTime() - date.getTime();
      const timeDifferenceInDays = Math.floor(timeDifferenceInMs / (1000 * 60 * 60 * 24));
      if (timeDifferenceInDays > 183) {
        this.elRef.nativeElement.style.borderBottom = 'red solid 6px';
      }
      if (timeDifferenceInDays < 183 && timeDifferenceInDays >= 30) {
        this.elRef.nativeElement.style.borderBottom = 'yellow solid 6px';
      }
      if (timeDifferenceInDays < 30 && timeDifferenceInDays >= 7) {
        this.elRef.nativeElement.style.borderBottom = 'green solid 6px';
      }
      if (timeDifferenceInDays < 7) {
        this.elRef.nativeElement.style.borderBottom = 'blue solid 6px';
      }
    }
  }
}
