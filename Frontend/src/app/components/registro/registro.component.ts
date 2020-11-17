import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [UserService]
})
export class RegistroComponent implements OnInit {

  constructor(public userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  goToInit(){
    this.router.navigate(['login']);
  }

  addUser(form: NgForm) {
    this.userService.postUser(form.value)
    .subscribe(res => {
      console.log(res);
      this.goToInit();
    });

  }

}
