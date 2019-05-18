import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css']
})
export class TableUsersComponent implements OnInit {

  users = [{ login: "Otto", name: "Mark", email: "@mdo", pass: "tt" },
  { login: "OKs", name: "Jack", email: "@mdo", pass: "tt" },
  { login: "Lut", name: "Nick", email: "@mdo", pass: "tt" }];


  constructor() { }

  ngOnInit() {
  }

}
