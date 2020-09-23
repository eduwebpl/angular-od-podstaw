import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import * as Odometer from 'odometer'

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Input()
  value = 0;

  @Input()
  label = ''

  @ViewChild('counterElemRef', { read: ElementRef })
  counterElemRef: ElementRef

  constructor() { }

  ngAfterViewInit(){
    
    const odometer = new Odometer({
      el: this.counterElemRef.nativeElement
    })

    odometer.update(this.value)

  }

  ngOnInit(): void {
  }

}
