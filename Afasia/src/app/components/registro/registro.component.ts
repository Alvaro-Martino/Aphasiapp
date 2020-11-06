import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [UserService]
})
export class RegistroComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  addUser(form: NgForm) {
    this.userService.postUser(form.value)
    .subscribe(res => {
      console.log(res);
    });

  }

}
