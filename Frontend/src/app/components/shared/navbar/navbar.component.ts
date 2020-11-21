import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 

  constructor(public router: Router, public userService: UserService) {
  }
  
  ngOnInit() {

  }

  logOut(){
    sessionStorage.clear();
    this.router.navigate(['inicio']);
    
  }
}
  


