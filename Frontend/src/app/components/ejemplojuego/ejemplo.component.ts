import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent implements OnInit {

// tslint:disable-next-line: typedef
testFun(a) {
    const info = document.getElementById('resultadoT');
    info.innerHTML = a;
    document.getElementById('resultadoT').classList.add('bg');

}

// tslint:disable-next-line: typedef
ayuda(a) {
  const info = document.getElementById('ayuda');
  info.innerHTML = a;
}
  constructor() { }

  ngOnInit(): void {
  }

}
