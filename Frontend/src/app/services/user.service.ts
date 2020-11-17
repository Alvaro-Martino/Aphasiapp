import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  selectedUser: User;
  users: User[];
  readonly URL_API = 'http://localhost:3000/api/user';


  
  constructor(private http: HttpClient) { 
      this.selectedUser = new User();
  }
  public isLoggedIn() {
    return sessionStorage.getItem('id') !== null;
  }

  getUsers() {
    return this.http.get(this.URL_API);
  }

  postUser( User: User ){
    return this.http.post(this.URL_API, User);
  }

  putUser(User: User) {
    return this.http.put(this.URL_API + `/${User._id}`, User );
  }

  deleteUser(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
  login( User: User ) {
    return this.http.post(this.URL_API + `/login`, User);
  }


  /*logOut ( ) {
    sessionStorage.clear();
  }*/

}
