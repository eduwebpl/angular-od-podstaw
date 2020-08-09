import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="main-content">
      <h1>
        Welcome to {{ title }}!
      </h1>

      {{ user.firstName }}
      <input type="text" [value]="user.firstName"
                         (keyup)="user.firstName = $event.target.value">


      <app-welcome [user]="anonym" (userSubscribed)="subscribed($event)"></app-welcome>

      <app-welcome [user]="user"></app-welcome>      
    </div>    
  `,
  styles: [`
    .main-content{
      padding: 20px;
      font-family: sans-serif;
    }
  `]
})
export class AppComponent {
  title = 'Portfolio';

  anonym = {
    firstName: '',
    isSubscribed: false,
    email:''
  }

  user = {
    firstName: 'Test',
    isSubscribed: false,
    email:''
  }

  subscribed(user){
    console.log(user)
    this.user = user;
  }

}
