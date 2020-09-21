import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recentProjects = [
    {
      id:123,
      name: 'Project ABC',
      image: 'http://lorempixel.com/400/400/technics/1/'
    },
    {
      id:234,
      name: 'Project XYZ',
      image: 'http://lorempixel.com/400/400/technics/2/'
    },
    {
      id:345,
      name: 'Project QWERTY',
      image: 'http://lorempixel.com/400/400/technics/3/'
    },
  ]

  readmore = false

  currentTab = ''

  constructor() { }

  ngOnInit(): void {
  }

}
