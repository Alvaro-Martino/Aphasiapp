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
    EjemploComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING,
    CommonModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
