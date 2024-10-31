import { Routes } from '@angular/router';
import { LoginComponent } from './modules/pages/login/login.component';
import { CadastrarUsuarioComponent } from './modules/pages/cadastrar-usuario/cadastrar-usuario.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'criar-conta', component: CadastrarUsuarioComponent },
];
