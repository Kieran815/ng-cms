import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient
  ) { }

  test(): Observable<User[]>{
    let url = 'http://localhost:3000/api/users'
    //Make a get request over HTTP
    return this.http.get<User[]>(url);
  }
}