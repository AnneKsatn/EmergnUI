import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { User } from '../shared/models/user.model';
import { UsersService } from '../shared/services/users.service';

@Component({
    selector: 'wfm-system',
    templateUrl: './system.component.html',
    styleUrls: ['./system.component.css']
})

export class SystemComponent implements OnInit{

    currUser: User
    users: User[]=[]
  
  
    constructor(
        private route: ActivatedRoute,
        private usersService: UsersService
    ) { }
  
    ngOnInit() {

        this.route.queryParams.subscribe((params: Params) => {
            this.currUser = new User(params['email'], params['login'], params['password'], params['name'])
        })

        console.log(this.usersService.getAllUsers().subscribe(data => this.users=data))
    }
  

}


