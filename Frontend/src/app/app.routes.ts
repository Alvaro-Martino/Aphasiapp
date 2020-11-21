import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { GameMenuComponent } from './components/game-menu/game-menu.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ContactoComponent } from './components/bodycontacto/body.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component' ;
import { EjemploComponent } from './components/ejemplojuego/ejemplo.component';
import { JuegoComponent } from './components/juego2/juego.component';

const APP_ROUTES: Routes =[
    { path: 'menu', component: MenuComponent},
    { path: 'registro', component: RegistroComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'gamemenu', component: GameMenuComponent},
    { path: 'login', component: LoginComponent },
    { path: 'ejemplo', component: EjemploComponent },
    { path: 'inicio', component: InicioComponent},
    { path: 'juego', component: JuegoComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'inicio'}

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
