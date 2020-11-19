import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService],
})
export class LoginComponent implements OnInit {
  constructor(public userService: UserService, private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {}

  goToMenu() {
    this.router.navigate(['menu']);
  }

  showSuccess() {
    this.toastr.success('Usuario ingresado con éxito');
  }

  showError() {
    this.toastr.error('Hubo un problema al ingresar, intente nuevamente', 'ERROR');
  }

  onLogin(form): void {
    console.log('todavia no entra');
    this.userService.login(form.value).subscribe((res) => {
      
      console.log('llega');
      console.log(res);
      //COMENTAR TODO EL IF SI TIRA ERROR AL LEVANTAR EL FRONT, LUEGO DESCOMENTAR
      if ( Object.keys(res.user).length !== 0 ) {
        sessionStorage.setItem('id', res.user.id);
        this.showSuccess();
        this.goToMenu();  
        console.log('if verdadero');   
      } else {
        console.log('if falso');
        this.showError();
      }
      //HASTA ACÁ
    });
  }
}
