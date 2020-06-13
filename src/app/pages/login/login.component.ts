import { Router } from '@angular/router';
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

  constructor(
    private usuarioService: UsuarioService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  submitLogin() {
    if (this.usuarioService.isUserLoggedIn()) {
      console.log('Usuario já está logado');
    } else {
      window.localStorage.removeItem('token');
      this.usuarioService.Login(this.login).subscribe(res => {
        if (res && res.data) {
          window.localStorage.setItem('token', res.data);
          this.router.navigate(['']);
        } else {
          console.log('Usuário ou senha inválidos');
        }
      });
    }
  }

}
