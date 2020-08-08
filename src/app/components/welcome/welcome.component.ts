import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  user = {
    firstName: 'Handsome Jack',
    isSubscribed: false,
    birthDay: new Date(1970,0,1)
  }

  dateFormat = 'shortDate'

  askAboutName = true

  constructor() { }

  askIfSubscribed(){
    return this.user.isSubscribed ? 
    'You are subscribed' : `Want to get updates ${this.user.firstName}?`
  }

  ngOnInit(): void {
  }

}
