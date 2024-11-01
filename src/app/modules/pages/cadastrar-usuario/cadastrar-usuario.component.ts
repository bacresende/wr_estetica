import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { FieldsetModule } from "primeng/fieldset";
import { InputGroupModule } from "primeng/inputgroup";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";
import { InputMaskModule } from "primeng/inputmask";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { TooltipModule } from "primeng/tooltip";

@Component({
  selector: "app-cadastrar-usuario",
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
    FieldsetModule,
    ReactiveFormsModule,
  ],
  templateUrl: "./cadastrar-usuario.component.html",
  styleUrl: "./cadastrar-usuario.component.css",
})
export class CadastrarUsuarioComponent implements OnInit {
  public formularioCadastro!: FormGroup;

  public showPassword: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formularioCadastro = this.fb.group({
      nome: this.fb.control("", [Validators.required]),
      cpf: this.fb.control("", [Validators.required]),
      ocupacao: this.fb.control("", [Validators.required]),
      email: this.fb.control("", [Validators.required, Validators.email]),
      senha: this.fb.control("", [Validators.required]),
      telefone: this.fb.control("", [Validators.required]),

      cep: this.fb.control("", [Validators.required]),
      endereco: this.fb.control("", [Validators.required]),
      numeroResidencia: this.fb.control("", [Validators.required]),
      bairro: this.fb.control("", [Validators.required]),
      complemento: this.fb.control("", [Validators.required]),
      cidade: this.fb.control("", [Validators.required]),
      estado: this.fb.control("", [Validators.required]),
      pais: this.fb.control(null, [Validators.required]),
    });
  }

  public fazerCadastro() {
    console.log("fazer cadastro");
    if (this.formularioCadastro.valid) {
      console.log(this.formularioCadastro.value);
    }
  }

  public fazerLogin() {
    this.router.navigate(["/"]);
  }

  public recuperarSenha() {
    console.log("senha");
  }

  public mostrarSenha() {
    this.showPassword = !this.showPassword;
  }
}
