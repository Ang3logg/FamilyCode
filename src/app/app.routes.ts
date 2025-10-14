import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Servicios } from './pages/servicios/servicios';
import { Portafolio } from './pages/portafolio/portafolio';     
import { Contacto } from './pages/contacto/contacto';
import { Blog } from './pages/blog/blog';

export const routes: Routes = [
    {path: '',component: Home},
    {path: 'servicios',component: Servicios},
    {path: 'portafolio',component: Portafolio},
    {path: 'contacto',component: Contacto},
    {path: 'blog',component: Blog},
    {path: '**',redirectTo: ''} //cualquier otra ruta redirige a home

];
