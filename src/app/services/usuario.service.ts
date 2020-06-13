import { LoginDTO } from './../dto/loginDTO';
import { AlunoDTO } from './../dto/alunoDTO';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioDTO } from '../dto/usuarioDTO';
import { formatDate } from '@angular/common';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  public userLoged = false;

  Login(login: LoginDTO): Observable<any> {
    return this.http.post('http://localhost:52738/login/signin', login);
  }

  CadastrarUsuario(form): Observable<any> {
    // const head = new HttpHeaders().set('X-Requested-With', 'XMLHttpRequest').set('Content-Type', 'application/json');
    const usuario = new UsuarioDTO();
    usuario.nome = form.nome;
    usuario.cpf = form.cpf;
    usuario.nascimento = form.nascimento;
    usuario.estado = form.estado;
    usuario.cidade = form.cidade;
    usuario.username = form.username;
    usuario.email = form.email;
    usuario.senha = form.senha;

    return this.http.post<UsuarioDTO>('http://localhost:52738/usuario', usuario);
  }

  getAuthorizationToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }

  getTokenExpirationDate(token: string): Date {
    const decoded: any = jwt_decode(token);

    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }

  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    if (!token || !this.userLoged) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    }

    return true;
  }

}
