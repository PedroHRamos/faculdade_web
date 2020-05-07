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

  CadastrarUsuario(): Observable<any> {
    // const head = new HttpHeaders().set('X-Requested-With', 'XMLHttpRequest').set('Content-Type', 'application/json');
    const usuario = new UsuarioDTO();
    const headerss = new HttpHeaders({
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json'
    });
    
    usuario.nome = "Pedro";
    usuario.cpf = "xxxxxxxxx";
    usuario.nascimento = new Date("July 21, 2000 01:15:00");
    usuario.estado = "MG";
    usuario.cidade = "BH";
    usuario.username = "pepedro";
    usuario.senha = "123456789";

    return this.http.post<UsuarioDTO>('http://localhost:52738/usuario/usuario', usuario);
  }

}
