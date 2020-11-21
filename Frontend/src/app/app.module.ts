import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { APP_ROUTING } from './app.routes';





// Componentes
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { RegistroComponent } from './components/registro/registro.component';
import {ContactoComponent} from './components/bodycontacto/body.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { InicioComponent } from './components/inicio/inicio.component';
import { EjemploComponent } from './components/ejemplojuego/ejemplo.component';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { GameMenuComponent } from './components/game-menu/game-menu.component';
import { JuegoComponent } from './components/juego2/juego.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavbarComponent,
    FooterComponent,
    RegistroComponent,
    ContactoComponent,
    LoginComponent,
    InicioComponent,
    EjemploComponent,
    GameMenuComponent,
    JuegoComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING,
    CommonModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot({
      timeOut: 6000,
      preventDuplicates: true
    }), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
