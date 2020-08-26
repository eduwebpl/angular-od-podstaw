import { Component, OnInit, Attribute, Input } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {

  @Input()
  value: string = '0'

  @Input()
  status: string;

  constructor(
    @Attribute('label') public label: string,
    @Attribute('striped') public striped: boolean,
    @Attribute('thin') public thin: boolean,
  ) {
  }

  ngOnInit(): void {
  }

}
