import { AlunoDTO } from './../../dto/alunoDTO';
import { AlunoService } from './../../services/aluno.service';
import { Component, OnInit, Inject } from '@angular/core';
import * as $ from 'jquery';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
    
  }

  submit(form) {
    console.log(form);
    console.log(form.value.email);
    this.usuarioService.CadastrarUsuario(form).subscribe(res => console.log(res));
    
  submitLogin(form) {
    var emailLogin = form.value.emailLogin;
    var passwordLogin = form.value.emailLogin;
  }

  submitCadastro(form) {
    var emailCadastro = form.value.emailCadastro;
    var emailCadastroConfi = form.value.emailCadastroConfi;
    var passwordCadastro = form.value.passwordCadastro;
    var passwordCadastroConfi = form.value.passwordCadastroConfi;
    var cpf = form.value.cpf;
  }

  /* submitCadastro(form) {
    console.log(form);
    console.log(form.value.emailCadastro);
    console.log(form.value.emailCadastroConfi);
    console.log(form.value.passwordCadastro);
    console.log(form.value.passwordCadastroConfi);
    console.log(form.value.cpf);
  }*/

}
