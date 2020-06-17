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
  controle: number = 0;
  
  constructor(private instituicaoService: InstituicaoService,
              private avaliacaoService: AvaliacaoService,
              private route: Router) { }

  ngOnInit(): void {
    this.instituicao = window.history.state.instituicao;
    this.obterMediaAvaliacoes();
  }

  avaliarInstituicao(id: number){
    this.instituicaoService.obterInstituicao(id).subscribe(res => {
      this.route.navigate(['/questionario'], { state: { instituicao: res } });
    });
  }

  obterMediaAvaliacoes(){
    return this.avaliacaoService.retornaMediaAvaliacoes(this.instituicao.id).subscribe(res => {
      this.quesitos = res;
      console.log('quesitos: ',this.quesitos);
      let a = this.obterMediaGeral();
      console.log('mediageral: ',a);
      this.separarAvaliacoesMedias();
    });
  }

  separarAvaliacoesMedias(){

    const maisOuMenosAMetade = (this.quesitos.length / 2);
    console.log('maisoumenosametade',maisOuMenosAMetade);
    for (let index = 0; index < maisOuMenosAMetade; index++) {
      let aux: AvaliacaoMediaDTO = new AvaliacaoMediaDTO();
      aux.id_quesito = this.quesitos[index].id_quesito;
      aux.nome = this.quesitos[index].nome;
      aux.media = this.quesitos[index].media;
      this.quesitosEsquerda.push(aux);
    }
    for (let index = maisOuMenosAMetade; index < this.quesitos.length; index++) {
      let aux: AvaliacaoMediaDTO = new AvaliacaoMediaDTO();
      aux.id_quesito = this.quesitos[index].id_quesito;
      aux.nome = this.quesitos[index].nome;
      aux.media = this.quesitos[index].media;
      this.quesitosDireita.push(aux);
    }

    console.log('esquerda: ', this.quesitosEsquerda);
    console.log('direita: ', this.quesitosDireita);

  }

  obterMediaGeral(){
    let soma: number;
    soma = 0;
    this.mediaGeral = 0;
    for(var quesito of this.quesitos){
      console.log(quesito.media);
      soma = soma + quesito.media;
    }
    console.log('quesitosLenght: ',this.quesitos.length);
    console.log('soma: ',soma);
    this.mediaGeral += soma / this.quesitos.length;
  }

  retornarMedia(){
    if(this.controle == 0){
      if(this.mediaGeral == null || this.mediaGeral === undefined){
        this.obterMediaAvaliacoes();
        console.log('primeiroquesitooo',this.quesitos);
      }
    }
    this.controle = 1;
    return this.mediaGeral;
  }

  

}
