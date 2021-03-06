import { AlunoDTO } from './../dto/alunoDTO';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private http: HttpClient) { }

  CadastrarAluno(): Observable<any> {
    // const head = new HttpHeaders().set('X-Requested-With', 'XMLHttpRequest').set('Content-Type', 'application/json');
    const aluno = new AlunoDTO();
    aluno.Instituicao = 1;
    aluno.Curso = 1;
    aluno.Usuario = 1;
    return this.http.post<AlunoDTO>('http://localhost:52738/aluno', aluno);
  }
}
