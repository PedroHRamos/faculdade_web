import { InstituicaoService } from './../../services/instituicao.service';
import { Component, OnInit } from '@angular/core';
import { InstituicaoDTO } from 'src/app/dto/instituicaoDTO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {

  constructor(
    private instituicaoService: InstituicaoService,
    private route: Router) { }

  instiuicoes: Array<InstituicaoDTO>;

  ngOnInit(): void {
    this.obterInstituicoes();
  }

  obterInstituicoes() {
    this.instituicaoService.obterInstituicoes().subscribe(res => {
      this.instiuicoes = res;
    });
  }

  detalheInstituicao(id: number) {
    this.instituicaoService.obterInstituicao(id).subscribe(res => {
      this.route.navigate(['/detalhe-faculdade'], {state: {instituicao: res}});
    });
  }

  ordernarNome() {
    function compare(a, b) {
      const bandA = a.nome.toUpperCase();
      const bandB = b.nome.toUpperCase();

      let comparison = 0;
      if (bandA > bandB) {
        comparison = 1;
      } else if (bandA < bandB) {
        comparison = -1;
      }
      return comparison;
    }
    console.log(this.instiuicoes.sort(compare));
  }

  ordernarProfessor() {
    function compare(a, b) {
      const bandA = a.professor.toUpperCase();
      const bandB = b.professor.toUpperCase();

      let comparison = 0;
      if (bandA > bandB) {
        comparison = 1;
      } else if (bandA < bandB) {
        comparison = -1;
      }
      return comparison;
    }
    console.log(this.instiuicoes.sort(compare));
  }
}
