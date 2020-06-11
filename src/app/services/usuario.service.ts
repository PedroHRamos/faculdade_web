import { LoginDTO } from './../dto/loginDTO';
import { AlunoDTO } from './../dto/alunoDTO';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioDTO } from '../dto/usuarioDTO';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  Login(login: LoginDTO): Observable<any> {
    return this.http.post('http://localhost:52738/login', 'grant_type=password&username=' +
    login.email + '&password=' + login.password);
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

}
