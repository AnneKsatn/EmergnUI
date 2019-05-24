import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Message } from '../../shared/models/message.model';
import { UsersService } from '../../shared/services/users.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'wfm-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})


export class EditPageComponent implements OnInit {

  form: FormGroup;
  message: Message;
  currUser: User;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.currUser = new User("","","","")
    this.route.queryParams.subscribe((params: Params) => {
      this.usersService.getUserByLogin(params['login']).subscribe((user: User)=> {
        this.currUser.email = user.email,
        this.currUser.login= user.login,
        this.currUser.password = user.password,
        this.currUser.name = user.name
        this.currUser.id = user.id
      }) 
    });
    
    this.message = new Message('danger', '');
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], this.checkEmailExist.bind(this)),
      'password': new FormControl(null, [Validators.required]),
      'login': new FormControl(null, [Validators.required,  Validators.pattern('[a-zA-Z0-9а-яА-Я]*')], this.checkLoginExist.bind(this)),
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
    const updatedUser = new User(email, login, password, name, this.currUser.id);
    if(formData.password == formData.repassword) {
      this.usersService.updateUser(updatedUser)
      .subscribe(()=>{
        this.router.navigate(['/system/main'], {
          queryParams: {
            login: updatedUser.login
          } }
        );
      })
    } else {
      this.showMessage("Пароли не совпадают!");
    }
  }

  checkLoginExist(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      this.usersService.getUserByLogin(control.value).subscribe((user: User) => {
        if (user) {
          if (user.login != this.currUser.login) {
            resolve({ loginExist: true })
          } else resolve(null)
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
          if (user.email != this.currUser.email) {
            resolve({ emailExist: true })
          } else resolve(null)
        } else {
          resolve(null)
        }
      })
    })
  }

  cancel() {
    this.router.navigate(['/system/main'], {
      queryParams: {
        login: this.currUser.login
      }
    })
  }


}
