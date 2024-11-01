import { Routes } from '@angular/router';
import { LoginComponent } from './modules/pages/login/login.component';
import { CadastrarUsuarioComponent } from './modules/pages/cadastrar-usuario/cadastrar-usuario.component';
import { HomeComponent } from './modules/pages/home/home.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'criar-conta', component: CadastrarUsuarioComponent },
  {path: 'inicio', component: HomeComponent}
];
