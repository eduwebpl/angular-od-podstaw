import { Directive, ElementRef, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Directive({
  selector: '[appWhenVisible]',
  exportAs:'whenVisible'
})
export class WhenVisibleDirective {

  @HostBinding('class.is-visible')
  isVisible: boolean;

  @HostBinding('class.was-visible')
  wasVisible: boolean;

  @Output()
  visibilityChange = new EventEmitter()

  @Input()
  threshold = .3

  constructor(
    private elem: ElementRef<HTMLElement>
  ) { }

  observer: IntersectionObserver

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver((results) => {
      results.forEach(result => {
        if (this.elem.nativeElement !== result.target) {
          return
        }
        this.isVisible = result.isIntersecting
        this.wasVisible = this.wasVisible || result.isIntersecting
        this.visibilityChange.emit(this.isVisible)
      })
    }, {
      // root:document.body,
      threshold: this.threshold
    })

    this.observer.observe(this.elem.nativeElement)
  }

  ngOnDestroy(): void {
    this.observer.disconnect()
  }

}
