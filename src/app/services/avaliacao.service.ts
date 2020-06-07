import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { AvaliacaooDTO } from '../dto/avaliacaoDTO';
import { isNull } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {

  avaliacoesTratadas: Array<AvaliacaooDTO> = new Array<AvaliacaooDTO>();

  constructor(private http: HttpClient) { }

  cadastrarAvaliacoes(avaliacoes: Array<any>){

    for (var avaliacao of avaliacoes ) {
      if(avaliacao.estrelas != 0 &&  avaliacao.estrelas != null){
        avaliacao.Id_usuario = 1;
        avaliacao.Id_instituicao = 2; //Pegar instituicao aqui
        avaliacao.Id_quesito = avaliacao.id;
      }
    }

    return this.http.post<AvaliacaooDTO>('http://localhost:52738/avaliacao', avaliacoes);
    
  }

}
