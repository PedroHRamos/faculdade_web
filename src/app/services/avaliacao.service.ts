import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { AvaliacaooDTO } from '../dto/avaliacaoDTO';
import { isNull } from 'util';
import { AvaliacaoMediaDTO } from '../dto/avaliacaoMediaDTO';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {

  avaliacoesTratadas: Array<AvaliacaooDTO> = new Array<AvaliacaooDTO>();

  constructor(private http: HttpClient,
    private usuarioService: UsuarioService) { }

  cadastrarAvaliacoes(avaliacoes: Array<any>, id_instituicao: number) {

    for (const avaliacao of avaliacoes ) {
      if (avaliacao.estrelas !== 0 &&  avaliacao.estrelas != null) {
        avaliacao.Id_usuario = this.usuarioService.getUserId(this.usuarioService.getAuthorizationToken());;
        avaliacao.Id_instituicao =  id_instituicao; // Pegar instituicao aqui
        avaliacao.Id_quesito = avaliacao.id;
      }
    }

    return this.http.post<AvaliacaooDTO>('http://localhost:52738/avaliacao', avaliacoes);

  }

  retornaMediaAvaliacoes(idInstituicao: number): Observable<any> {
    return this.http.get<Array<AvaliacaoMediaDTO>>(`http://localhost:52738/avaliacao?id_instituicao=${idInstituicao}`);
  }

  retornaMediaAvaliacoesAsync(idInstituicao: number) {
    return this.http.get<Array<AvaliacaoMediaDTO>>(`http://localhost:52738/avaliacao?id_instituicao=${idInstituicao}`).toPromise();
  }

}
