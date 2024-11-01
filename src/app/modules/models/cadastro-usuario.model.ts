import { Endereco } from "./endereco.model";
import { Usuario } from "./usuario.model";

export interface CadastrarUsuario {
  usuario: Usuario;
  endereco: Endereco;
}
