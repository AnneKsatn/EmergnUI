import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'wfm-system',
    templateUrl: './system.component.html',
    styleUrls: ['./system.component.css']
})

export class SystemComponent implements OnInit{

    users = [{ login: "Otto", name: "Mark", email: "@mdo", pass: "tt" },
    { login: "OKs", name: "Jack", email: "@mdo", pass: "tt" },
    { login: "Lut", name: "Nick", email: "@mdo", pass: "tt" },
    { login: "OKs", name: "Jack", email: "@mdo", pass: "tt" },
    { login: "Lut", name: "Nick", email: "@mdo", pass: "tt" },
    { login: "OKs", name: "Jack", email: "@mdo", pass: "tt" },
    { login: "Lut", name: "Nick", email: "@mdo", pass: "tt" },
    { login: "OKs", name: "Jack", email: "@mdo", pass: "tt" },
    { login: "Lut", name: "Nick", email: "@mdo", pass: "tt" },
    { login: "OKs", name: "Jack", email: "@mdo", pass: "tt" },
    { login: "Lut", name: "Nick", email: "@mdo", pass: "tt" },
    { login: "OKs", name: "Jack", email: "@mdo", pass: "tt" },
    { login: "Lut", name: "Nick", email: "@mdo", pass: "tt" }];
  
  
    constructor() { }
  
    ngOnInit() {
    }
  

}


