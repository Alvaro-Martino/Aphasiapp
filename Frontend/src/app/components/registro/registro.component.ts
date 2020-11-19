import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [UserService]
})
export class RegistroComponent implements OnInit {

  constructor(public userService: UserService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  goToInit(){
    this.router.navigate(['login']);
  }

  showSuccess() {
    this.toastr.success('Usuario registrado con éxito');
  }

  showError() {
    this.toastr.error('Hubo un problema al registrarse, intente nuevamente', 'ERROR');
  }

  addUser(form: NgForm) {
    this.userService.postUser(form.value)
    .subscribe(res => {
      console.log(res);
      //COMENTAR EL IF SI TIRA ERROR AL LEVANTAR FRONT, LUEGO DESCOMENTAR
      if ( res.status != 'Saved' ) {
        this.showError();        
      } else {
        this.showSuccess();
      }
      //HASTA ACÁ
      
      this.goToInit();
    });

  }

}
