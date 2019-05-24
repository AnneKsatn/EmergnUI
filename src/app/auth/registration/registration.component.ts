import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Message } from '../../shared/models/message.model';
import { UsersService } from '../../shared/services/users.service';
import { User } from '../../shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'wfm-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  message: Message;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit() {
    this.message = new Message('danger', '');
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], this.checkEmailExist.bind(this)),
      'password': new FormControl(null, [Validators.required]),
      'login': new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z0-9а-яА-Я]*')], this.checkLoginExist.bind(this)),
      'name': new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Zа-яА-Я]*')]),
      'repassword': new FormControl(null, [Validators.required])
    });
  }

  private showMessage(text: string, type: string = 'danger'){
    this.message = new Message(type, text);
    window.setTimeout(()=> {
      this.message.text = '';
    }, 5000);
  }


  onSubmit(){
    const formData = this.form.value;

    const {email, password, name, login} = this.form.value;
    const user = new User(email, login, password, name);
    if(formData.password == formData.repassword) {
      this.usersService.createNewUser(user)
      .subscribe(()=>{
        this.router.navigate(['/login']);
      })
    } else {
      this.showMessage("Пароли не совпадают!");
    }
  }

  checkLoginExist(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      this.usersService.getUserByLogin(control.value).subscribe((user: User) => {
        if(user) {
          resolve({loginExist: true})
        } else {
          resolve(null)
        }
      })
    })
  }

  checkEmailExist(control: FormControl): Promise<any>{
    return new Promise((resolve, reject) => {
      this.usersService.getUserByEmail(control.value).subscribe((user: User) => {
        if(user) {
          resolve({emailExist: true})
        } else {
          resolve(null)
        }
      })
    })
  }

}
