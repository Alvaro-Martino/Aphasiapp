import { RouterModule, Routes } from '@angular/router'
import { MenuComponent } from './components/menu/menu.component';
import { RegistroComponent } from "./components/registro/registro.component";
import { ContactoComponent } from "./components/bodycontacto/body.component";

const APP_ROUTES: Routes =[
    { path: 'menu', component: MenuComponent},
    { path: 'registro', component: RegistroComponent },
    { path: 'contacto', component: ContactoComponent },    
    { path: '**', pathMatch: 'full', redirectTo:'menu'} 

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);