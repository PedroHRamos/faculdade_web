import { AlunoDTO } from './../../dto/alunoDTO';
import { AlunoService } from './../../services/aluno.service';
import { Component, OnInit, Inject } from '@angular/core';
import * as $ from 'jquery';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';
import { UsuarioDTO } from 'src/app/dto/usuarioDTO';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioDTO = new UsuarioDTO();

  constructor(private usuarioService: UsuarioService, private authservice: AuthService) {
  }

  ngOnInit(): void {
  }

  submitLogin() {
    this.authservice.fazerLogin(this.usuario);
  }

  submitCadastro() {
    console.log(this.usuario);
  }

 

}
