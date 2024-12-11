import { Directive, ElementRef, HostListener }
       from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})

export class HighlightDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseover') onMousOver() {
    this.el.nativeElement.style.color = "red";
  }

  @HostListener('mouseleave') onMousLeave() {
    this.el.nativeElement.style.color = "";
  }

}
