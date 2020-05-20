import { Injectable } from '@angular/core';
import { UsuarioDTO } from 'src/app/dto/usuarioDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  fazerLogin(usuario: UsuarioDTO){
    console.log(usuario);
    //chamar o back para fazer autenticação e devolver token
  }

}
