import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
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
    TooltipModule,
    ToastModule,
    RippleModule,
  ],
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public showPassword: boolean = false;

  constructor(private readonly router: Router, private readonly messageService: MessageService){}


  public fazerCadastro() {
    this.router.navigate(['/criar-conta']);
  }

  public fazerLogin() {
    console.log('login');
    this.messageService.add({
      severity: "warn",
      summary: "Ops",
      detail: "Há campos em branco",
    });
  }

  public recuperarSenha() {
    console.log('senha');
  }

  public mostrarSenha(){
    this.showPassword = !this.showPassword;
  }
}
