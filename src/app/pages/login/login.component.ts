import { AlunoDTO } from './../../dto/alunoDTO';
import { AlunoService } from './../../services/aluno.service';
import { Component, OnInit, Inject } from '@angular/core';
import * as $ from 'jquery';
import { UsuarioService } from 'src/app/services/usuario.service';


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
    
  }

}
