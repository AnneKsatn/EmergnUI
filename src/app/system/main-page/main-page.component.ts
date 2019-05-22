import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UsersService } from '../../shared/services/users.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {


  currUser: User
  users: User[] = []
  searchEmail='';

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {

    this.currUser = new User("","","","")
    this.route.queryParams.subscribe((params: Params) => {
      this.usersService.getUserByLogin(params['login']).subscribe((user: User)=> {
        this.currUser.email = user.email,
        this.currUser.login= user.login,
        this.currUser.password = user.password,
        this.currUser.name = user.name
      })
    })

    this.usersService.getAllUsers().subscribe(data => this.users = data);

   
  }

  edit() {
    this.router.navigate(['/system/edit'], {
      queryParams: {
        login: this.currUser.login
      }
    });

  }

  exit() {
    this.router.navigate(['/login']);
  }

}

