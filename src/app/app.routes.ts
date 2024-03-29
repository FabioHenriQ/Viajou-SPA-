import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contato', component: ContactComponent},
  {path: 'sobre', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: ''}
];
