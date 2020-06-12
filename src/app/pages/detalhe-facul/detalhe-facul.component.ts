import { Component, OnInit } from '@angular/core';
import { InstituicaoDTO } from 'src/app/dto/instituicaoDTO';
import { InstituicaoService } from 'src/app/services/instituicao.service';
import { Router } from '@angular/router';
import { QuesitoDTO } from 'src/app/dto/quesitoDTO';
import { AvaliacaoService } from 'src/app/services/avaliacao.service';
import { AvaliacaoMediaDTO } from 'src/app/dto/avaliacaoMediaDTO';

@Component({
  selector: 'app-detalhe-facul',
  templateUrl: './detalhe-facul.component.html',
  styleUrls: ['./detalhe-facul.component.css']
})
export class DetalheFaculComponent implements OnInit {

  instituicao: InstituicaoDTO;
  quesitos: Array<AvaliacaoMediaDTO> = new Array<AvaliacaoMediaDTO>();
  quesitosEsquerda: Array<AvaliacaoMediaDTO> = new Array<AvaliacaoMediaDTO>();
  quesitosDireita: Array<AvaliacaoMediaDTO> = new Array<AvaliacaoMediaDTO>();
  mediaGeral: number;
  
  constructor(private instituicaoService: InstituicaoService,
              private avaliacaoService: AvaliacaoService,
              private route: Router) { }

  ngOnInit(): void {
    this.instituicao = window.history.state.instituicao;
    this.obterMediaAvaliacoes();
    this.separarAvaliacoesMedias();
  }

  avaliarInstituicao(id: number){
    this.instituicaoService.obterInstituicao(id).subscribe(res => {
      this.route.navigate(['/questionario'], { state: { instituicao: res } });
    });
  }

  obterMediaAvaliacoes(){
    return this.avaliacaoService.retornaMediaAvaliacoes(this.instituicao.id).subscribe(res => {
      this.quesitos = res;
    });
  }

  separarAvaliacoesMedias(){

    const maisOuMenosAMetade = (this.quesitos.length / 2);
    for (let index = 0; index < maisOuMenosAMetade; index++) {
      this.quesitosEsquerda[index].id_quesito = this.quesitos[index].id_quesito;
      this.quesitosEsquerda[index].media = this.quesitos[index].media;
    }
    for (let index = maisOuMenosAMetade + 1; index < this.quesitos.length; index++) {
      this.quesitosDireita[index].id_quesito = this.quesitos[index].id_quesito;
      this.quesitosDireita[index].media = this.quesitos[index].media;
    }

  }

  obterMediaGeral(){
    let soma: number;
    for(var quesito of this.quesitos){
      soma = quesito.media;
    }
    this.mediaGeral = soma / this.quesitos.length;
  }

}
