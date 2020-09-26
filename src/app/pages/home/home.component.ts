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

  testimonials = [
    {
      author:'Johanna Arc',
      title:'I was blown away ...',
      content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. ',
      image:'https://i.imgur.com/h2E4WGw.jpg',
      rating:3.5
    },
    {
      author:'John Doe',
      title:'Awesome work',
      content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. ',
      image:'https://randomuser.me/api/portraits/men/32.jpg',
      // rating:4.5
    }
  ]

  readmore = false

  currentTab = ''

  contactForm = {
    name: 'Anonym',
    email:'',
    agreement: false,
    topic: 'new',
    message:'',
  }
  
  sendMessage(){
    console.log(this.contactForm)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
