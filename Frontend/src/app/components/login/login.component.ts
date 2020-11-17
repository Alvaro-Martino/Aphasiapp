import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService],
})
export class LoginComponent implements OnInit {
  constructor(public userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  goToMenu() {
    this.router.navigate(['menu']);
  }

  onLogin(form): void {
    console.log('todavia no entra');
    this.userService.login(form.value).subscribe((res) => {
      
      console.log('llega');
      console.log(res);
      if (res) {
        sessionStorage.setItem('id', res.user.id);
      }
      this.goToMenu();
    });
  }
}
