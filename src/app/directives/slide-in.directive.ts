import { Directive, ElementRef, HostBinding, Input, Optional } from '@angular/core';
import { WhenVisibleDirective } from './when-visible.directive';

@Directive({
  selector: '[appSlideIn]',
  exportAs: 'slideIn'
  // host: {
  //   '[class.animate]': 'animate'
  // }
})
export class SlideInDirective {

  // @HostBinding('hidden')
  // @HostBinding('id')
  // @HostBinding('style.color')

  @Input('appSlideIn')
  @HostBinding('class')
  direction = 'left'

  @HostBinding('class.slideIn')
  slideIn = true;

  @HostBinding('class.animate')
  animate = false;

  @Input()
  delay = 1000;

  constructor(
    private elem: ElementRef<HTMLElement>,
    @Optional() private isVisibleDirective: WhenVisibleDirective,
  ) {
  }

  ngOnInit() {
    if (this.isVisibleDirective) {
      this.isVisibleDirective.visibilityChange.subscribe(visible => {
        if (visible && !this.animate) {
          this.delay = 0
          this.animateNow();
        }
      })
    }else{
      this.animateNow()
    }

  }

  handler

  animateNow() {
    this.handler = setTimeout(() => {
      // this.elem.nativeElement.classList.add('animate')
      this.animate = true;
    }, this.delay);
  }

  ngOnDestroy(): void {
    clearTimeout(this.handler)
  }

}
