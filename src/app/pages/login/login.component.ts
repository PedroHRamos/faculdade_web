import { Component, OnInit, Inject } from '@angular/core';
import * as $ from 'jquery';
import { UsuarioService } from 'src/app/services/usuario.service';
import { LoginDTO } from 'src/app/dto/loginDTO';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: LoginDTO = new LoginDTO();

  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
  }

  submitLogin() {
    this.usuarioService.Login(this.login).subscribe(res => console.log(res));
  }

}
