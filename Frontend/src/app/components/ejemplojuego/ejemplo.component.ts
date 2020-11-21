import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})


export class EjemploComponent  {
  palabra: string;

// tslint:disable-next-line: typedef
testFun(a) {
    const info = document.getElementById('resultadoT');
    info.innerHTML = a;
    document.getElementById('resultadoT').classList.add('bg');
}

testFunb(a) {
  const info = document.getElementById('resultadoT');
  info.innerHTML = a;
  document.getElementById('resultadoT').classList.add('bt');
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
 document.getElementById('palabra').innerHTML = 'PERRO';
}
  ayuda(){
  let palabras;
  palabras = document.getElementById('palabra');
  
  if(palabras = 'AVIÓN'){
    const info = document.getElementById('ayuda');
    info.innerHTML = 'Mascota' }
    else {
      const info = document.getElementById('ayuda');
      info.innerHTML = 'Tiene 4 ruedas'
      console.log(palabras);
      
    }
  document.getElementById('img4').classList.add('desaparecer');
  const info = document.getElementById('imagen4');
  info.innerHTML = '<p class=\'tomate\'> TOMATE TU TIEMPO </p> <br> <p>Observa la Pista  </p><br> <p>de </p><br> <p>abajo </p>';

   }
  



  
  
// tslint:disable-next-line: typedef
//ayuda() {
 // let x = document.getElementById('palabra');
  //if (x ='AVIÓN') {
    //const info = document.getElementById('ayuda');
    //info.innerHTML = 'Vuela' }
  //}
 // if (x ='AUTO'){
   // const info = document.getElementById('ayuda');
    //info.innerHTML = 'Tiene 4 ruedas'}
//else {const info = document.getElementById('ayuda')
    //info.innerHTML = 'inmovible' }

   }
