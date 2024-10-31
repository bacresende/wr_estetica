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
  selector: 'app-cadastrar-usuario',
  standalone: true,
  imports: [ButtonModule,
    FormsModule,
    InputMaskModule,
    CardModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    PasswordModule,
    TooltipModule],
  templateUrl: './cadastrar-usuario.component.html',
  styleUrl: './cadastrar-usuario.component.css'
})
export class CadastrarUsuarioComponent {

  public showPassword: boolean = false;

  constructor(private readonly router: Router){}


  public fazerCadastro() {
    console.log('fazer cadastro');
  }

  public fazerLogin() {
    this.router.navigate(['/']);
  }

  public recuperarSenha() {
    console.log('senha');
  }

  public mostrarSenha(){
    this.showPassword = !this.showPassword;
  }

}
