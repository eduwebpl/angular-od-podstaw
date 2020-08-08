import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  user = {
    firstName: 'Handsome',
    isSubscribed: false
  }

  steps = {
    showWelcome: false,
    askForFirstName:true,
    askForEmail:false,
    askToSubscribe:false,
    subscribedSuccess:false
  }

  constructor() { }

  updateName(firstName: string){
    this.user.firstName = firstName
  }

  subscribeUser(email:string){}

  skipSubscription(){}
  
  ngOnInit(): void {
  }

}
