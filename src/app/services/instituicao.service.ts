import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { InstituicaoDTO } from '../dto/instituicaoDTO';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstituicaoService {

  constructor(private http: HttpClient) { }

  obterInstituicoes(): Observable<Array<InstituicaoDTO>> {
    return this.http.get<Array<InstituicaoDTO>>('http://localhost:52738/instituicao');
  }

  obterInstituicao(id: number) {
    return this.http.get<InstituicaoDTO>(`http://localhost:52738/instituicao?id=${id}`);
  }

}
