import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonModule,
    FormsModule,
    InputMaskModule,
    CardModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    PasswordModule,
    TooltipModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public showPassword: boolean = false;

  constructor(private readonly router: Router){}


  public fazerCadastro() {
    this.router.navigate(['/criar-conta']);
  }

  public fazerLogin() {
    console.log('login');
  }

  public recuperarSenha() {
    console.log('senha');
  }

  public mostrarSenha(){
    this.showPassword = !this.showPassword;
  }
}
