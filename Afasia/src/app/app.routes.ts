import { RouterModule, Routes } from '@angular/router'
import { MenuComponent } from './components/menu/menu.component';
import { RegistroComponent } from "./components/registro/registro.component";

const APP_ROUTES: Routes =[
    { path: 'menu', component: MenuComponent},
    { path: 'registro', component: RegistroComponent },
    { path: '**', pathMatch: 'full', redirectTo:'menu'} 

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);