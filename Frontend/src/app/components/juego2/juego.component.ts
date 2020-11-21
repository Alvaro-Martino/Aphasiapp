import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent {

  testFun(a) {
    const info = document.getElementById('resultadoT');
    info.innerHTML = a;
    document.getElementById('resultadoT').classList.add('bg');
}

// tslint:disable-next-line: typedef
frasesalea() {

	let random = '';
	let frases = ['<p id=\'frase1\'   class=\'frase1\'>AUTO</p>',
	'<p id =\'frase1\'  class=\'frase2\'>CASA</p>',
	'<p id=\'frase1\' class=\'frase3\'>AVIÓN</p>'];
	let f= frases.length;
	random += Math.floor(Math.random() * f);

 console.log(frases[random]);
 document.getElementById('palabra').innerHTML = frases[random];
}
  ayuda(){
  let palabras;
   palabras = document.getElementById('palabra');
  
  if(palabras == 'AVIÓN'){
    const info = document.getElementById('ayuda');
    info.innerHTML = 'Vuela' }
    else {
      const info = document.getElementById('ayuda');
      info.innerHTML = 'MIAU'
      console.log(palabras);
    }
    document.getElementById('imagen2').classList.add('fondorojo');
    document.getElementById('imagen4').classList.add('fondorojo');
   }
  
  constructor() { }

  ngOnInit(): void {
  }

}
