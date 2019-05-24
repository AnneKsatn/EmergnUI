import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user.model';

@Injectable()
export class UsersService {
  constructor(private http: Http) { }

  getUserByLogin(login: string): Observable<User> {
    return this.http.get(`http://localhost:8080/users?login=${login}`)
      .map((response: Response) => response.json())
      .map((user: User[]) => user[0] ? user[0] : undefined);
  }


  getUserByEmail(email: string): Observable<User> {
    return this.http.get(`http://localhost:8080/users?email=${email}`)
      .map((response: Response) => response.json())
      .map((user: User[]) => user[0] ? user[0] : undefined);
  }

  createNewUser(user: User): Observable<User> {
    return this.http.post('http://localhost:8080/users', user)
      .map((response: Response) => response.json());
  }

  getAllUsers() {
    return this.http.get(`http://localhost:8080/users`)
      .map((response: Response) => response.json())
  }

  updateUser(user: User): Observable<User> {
    return this.http.put(`http://localhost:8080/users/${user.id}`, user)
      .map((response: Response) => response.json());
  }
}
