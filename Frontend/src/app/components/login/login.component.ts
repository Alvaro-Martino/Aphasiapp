import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService],
})
export class LoginComponent implements OnInit {
  constructor(public userService: UserService) {}

  ngOnInit(): void {}

  /*onLogin(form): void {
    this.userService.login(form.value).compare(res => {
    this.router.navigateByUrl('/auth');
  });*/

  onLogin(form):void {
    console.log('entra');
      this.userService.login(form.value).subscribe(res => {
        console.log('llega');
        console.log(res);
      });
  };
}
