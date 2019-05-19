
import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent {
  
  userName = '';
  userLogin = '';
  userPassword = '';
  userEmail = '';

  constructor() { }
  
  register(userName){
    this.userName = userName;
  }

  setName(event: Event){

    console.log(Event);
  }

  submitForm(form: HTMLFormElement){
    console.log("Submited!", form);
  }


}
