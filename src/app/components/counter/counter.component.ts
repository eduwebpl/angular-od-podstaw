import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, Input, NgZone, OnInit, Optional, ViewChild } from '@angular/core';

import * as Odometer from 'odometer'
import { WhenVisibleDirective } from 'src/app/directives/when-visible.directive';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit, DoCheck {

  @Input()
  value = 0;

  currentValue = 0;

  @Input()
  label = ''

  @ViewChild('counterElemRef', { read: ElementRef })
  counterElemRef: ElementRef

  @Input()
  grow = 0

  constructor(
    @Optional()
    private visiblility: WhenVisibleDirective,
    private cdr: ChangeDetectorRef,
    private zone: NgZone) { }

  ngOnInit(): void {
    this.currentValue = this.value
  }

  updateAnimation = false
  odometer

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      this.odometer = new Odometer({
        el: this.counterElemRef.nativeElement,
      })

      if (this.visiblility) {
        this.visiblility.visibilityChange.subscribe(visible => {
          if (visible) {
            this.odometer.update(this.currentValue)
            this.startGrowing()
          }
        })
      } else {
        this.odometer.update(this.currentValue)
        this.startGrowing()
      }
    })

    // setInterval(()=>{
    //   this.value += this.grow
    //   // this.cdr.detectChanges()
    //   // this.cdr.markForCheck()
    //   // this.counterElemRef.nativeElement.innerText = this.value
    // },1000)

    this.startGrowing();
  }

  intervalHandler

  private startGrowing() {
    if (this.grow) {
      this.zone.runOutsideAngular(() => {
        this.intervalHandler = setInterval(() => {
          // Grow counter
          this.currentValue += this.grow;
          this.odometer.update(this.currentValue);

          this.zone.run(() => {

            // Add pulse animation and remove after 1s
            this.updateAnimation = true;
            setTimeout(() => { this.updateAnimation = false; }, 1000);

          });
        },
          // Update at random between 3s and 8s
          3000 + (Math.random() * 5000)
        );
      });
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    clearInterval(this.intervalHandler)
  }

  checkIfUpdating() {
    // console.log('Detecting child changes')
  }

  ngDoCheck() {
    // console.log('Detecting parent changes')
  }

}
