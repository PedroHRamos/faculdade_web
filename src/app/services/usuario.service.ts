import { Observable } from 'rxjs/internal/Observable';
import { UsuarioDTO } from './../dto/usuarioDTO';
import { LoginDTO } from './../dto/loginDTO';
import { AlunoDTO } from './../dto/alunoDTO';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { formatDate } from '@angular/common';
import * as jwt_decode from 'jwt-decode';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  // userLoged = false;

  Login(login: LoginDTO): Observable<any> {
    // return this.http.post('http://localhost:52738/login/signin', login, {observe: 'response'})
    //   .pipe(tap(data => {
    //     if (data.status === 200) {
    //       this.userLoged = true;
    //     }
    //   }));
    return this.http.post('http://localhost:52738/login/signin', login);
  }

  ObterDetalheUsuario(id: number): Observable<UsuarioDTO> {
    return this.http.post<UsuarioDTO>('http://localhost:52738/login/user-details', parseInt(id.toString()));
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

    return this.http.post<UsuarioDTO>('http://localhost:52738/login/create-account', usuario);
  }

  getAuthorizationToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }

  getUserId(token: string): number {
    const decoded: any = jwt_decode(token);

    if (decoded.exp === undefined) {
      return null;
    }
    return decoded.userid;
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
    // if (!token || !this.userLoged) {
    if (!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    }

    return true;
  }

}
