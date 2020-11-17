import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 /* public get currentUser() {
    return this.userService.selectedUser;
  }

  constructor(private _router: Router, private userService: UserService) {
    if (localStorage.getItem("currentUser") == null) {
      this._router.navigate(['']);
    }
    else {
      var user = JSON.parse(localStorage.getItem('currentUser'));
      if (user.role == 'admin') {
        //this.CurrentUser = user;
      }
      else {
        //this.CurrentUser = user;
      }
    }
  }

  */ngOnInit() {

  }/*
  //CurrentUser: User = new User();

  Menus() {
    this._router.navigate(['menu']);
  }
  
  Contacto() {
    this._router.navigate(['contacto']);
  }

  

  LogOut() {
    localStorage.removeItem("currentUser");
    this._router.navigate(['']);
  }*/
}
  


