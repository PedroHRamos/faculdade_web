import { InstituicaoService } from './../../services/instituicao.service';
import { Component, OnInit } from '@angular/core';
import { InstituicaoDTO } from 'src/app/dto/instituicaoDTO';
import { Router } from '@angular/router';
import { AvaliacaoMediaDTO } from 'src/app/dto/avaliacaoMediaDTO';
import { ItemRankDTO } from 'src/app/dto/itemRankDTO';
import { QuesitoService } from 'src/app/services/quesito.service';
import { QuesitoDTO } from 'src/app/dto/quesitoDTO';
import { AvaliacaoService } from 'src/app/services/avaliacao.service';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {

  constructor(
    private quesitoService: QuesitoService,
    private instituicaoService: InstituicaoService,
    private avaliacaoService: AvaliacaoService,
    private route: Router) { }

  instiuicoes: Array<InstituicaoDTO>;
  quesitos: Array<QuesitoDTO>;
  avaliacoes: Array<AvaliacaoMediaDTO>;
  itens: Array<ItemRankDTO>;
  item: ItemRankDTO;
  private subscription: Subscription;

  ngOnInit(): void {
    this.avaliacoes = new Array();
    this.itens = new Array<ItemRankDTO>();
    this.obterQuesitos();
    this.obterInstituicoes();
  }

  obterInstituicoes() {
    this.item = {instituicao: new InstituicaoDTO(), avaliacoes: new Array<AvaliacaoMediaDTO>(), mediaGeral: 0};
    this.instituicaoService.obterInstituicoes().subscribe(async res => {
      this.instiuicoes = res;
      this.instiuicoes.forEach((x, index) => {
        // console.log(x, this.item);
        this.item.instituicao = x;
        this.avaliacaoService.retornaMediaAvaliacoes(x.id).subscribe(ava => {
          // this.item.avaliacoes = ava;
          // this.itens.push(this.item);
          // console.log(this.itens);
          this.avaliacoes[index] = ava;
          console.log(this.avaliacoes);
        });
      });
    });
  }
      // this.instiuicoes.forEach(async (x, index) => {
      //   this.item.instituicao = x;
      //   await this.obterAva(x.id).then(pen => {this.item.avaliacoes = pen; this.itens.push(this.item);});
      //   console.log(index);
      //   console.log(this.item.avaliacoes);
      //   this.itens.push(this.item);
      //   console.log(this.itens);

      // });
      // for (const x of this.instiuicoes) {
      //   this.item.instituicao = x;
      //   this.item.avaliacoes = await this.avaliacaoService.retornaMediaAvaliacoesAsync(x.id);
      //   console.log();

      //   this.itens.push(this.item);
      //   console.log(this.item.avaliacoes);
      //   console.log(this.itens);
        // this.subscription = this.avaliacaoService.retornaMediaAvaliacoes(x.id).subscribe(ava => {
        //   this.item.avaliacoes = ava;
        //   this.itens.push(this.item);
        //   console.log(this.itens);
        // });
      // });

  // async obterAva(id: number) {
  //   return this.avaliacaoService.retornaMediaAvaliacoesAsync(id);
  // }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

  retornaAvaliacao(index: number) {
    return this.avaliacoes[index];
  }

  obterQuesitos() {
    this.quesitoService.obterQuesitos().subscribe(res => {
      this.quesitos = res;
    });
  }

  detalheInstituicao(id: number) {
    this.instituicaoService.obterInstituicao(id).subscribe(res => {
      this.route.navigate(['/detalhe-faculdade'], { state: { instituicao: res } });
    });
  }

}
