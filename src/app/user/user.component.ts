import { Component} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
   userLogin = 'Lucya';
   userName = 'Kate';
   userEmail = 'sar@go.com';
   userPassword = '12345';
}
