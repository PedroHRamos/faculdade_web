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
      this.route.navigate(['/detalhe-faculdade'], { state: { instituicao: res } });
    });
  }

  // Inicio Ordenação Nome
  ordernarNomeStart() {
    var valor = document.getElementById('nome').innerHTML;
    if (valor === 'Nome') {
      document.getElementById('nome').innerHTML = 'Nome ▲';
      this.ordernarNome();
    } else {
      if (valor === 'Nome ▲') {
        document.getElementById('nome').innerHTML = 'Nome ▼';
        this.ordernarNome2();
      } else {
        document.getElementById('nome').innerHTML = 'Nome ▲';
        this.ordernarNome();
      }
    }
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

  ordernarNome2() {
    function compare(a, b) {
      const bandA = a.nome.toUpperCase();
      const bandB = b.nome.toUpperCase();

      let comparison = 0;
      if (bandA > bandB) {
        comparison = -1;
      } else if (bandA < bandB) {
        comparison = 1;
      }
      return comparison;
    }
    console.log(this.instiuicoes.sort(compare));
  }

  // Fim Ordenação Nome
  // Inicio Ordenação Professor
  ordernarProfesssorStart() {
    var valor = document.getElementById('professores').innerHTML;
    if (valor === 'Professores') {
      document.getElementById('professores').innerHTML = 'Professores ▲';
      this.ordernarProfessor();
    } else {
      if (valor === 'Professores ▲') {
        document.getElementById('professores').innerHTML = 'Professores ▼';
        this.ordernarProfessor2();
      } else {
        document.getElementById('professores').innerHTML = 'Professores ▲';
        this.ordernarProfessor();
      }
    }
  }

  ordernarProfessor() {
    function compare(a, b) {
      const bandA = a.professor;
      const bandB = b.professor;

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

  ordernarProfessor2() {
    function compare(a, b) {
      const bandA = a.professor;
      const bandB = b.professor;

      let comparison = 0;
      if (bandA > bandB) {
        comparison = -1;
      } else if (bandA < bandB) {
        comparison = 1;
      }
      return comparison;
    }
    console.log(this.instiuicoes.sort(compare));
  }

  // Fim Ordenação Professor
  // Inicio Ordenação Rank

  ordernarRankStart() {
    var valor = document.getElementById('rank').innerHTML;
    if (valor === 'Rank') {
      document.getElementById('rank').innerHTML = 'Rank ▲';
      this.ordernarRank();
    } else {
      if (valor === 'Rank ▲') {
        document.getElementById('rank').innerHTML = 'Rank ▼';
        this.ordernarRank2();
      } else {
        document.getElementById('rank').innerHTML = 'Rank ▲';
        this.ordernarRank();
      }
    }
  }

  ordernarRank() {
    function compare(a, b) {
      const bandA = a.rank;
      const bandB = b.rank;

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

  ordernarRank2() {
    function compare(a, b) {
      const bandA = a.rank;
      const bandB = b.rank;

      let comparison = 0;
      if (bandA > bandB) {
        comparison = -1;
      } else if (bandA < bandB) {
        comparison = 1;
      }
      return comparison;
    }
    console.log(this.instiuicoes.sort(compare));
  }

  // Fim Ordenação Rank
  // Inicio Ordenação Media

  ordernarMediaStart() {
    var valor = document.getElementById('media').innerHTML;
    if (valor === 'Avaliação geral média') {
      document.getElementById('media').innerHTML = 'Avaliação geral média ▲';
      this.ordernarMedia();
    } else {
      if (valor === 'Avaliação geral média ▲') {
        document.getElementById('media').innerHTML = 'Avaliação geral média ▼';
        this.ordernarMedia2();
      } else {
        document.getElementById('media').innerHTML = 'Avaliação geral média ▲';
        this.ordernarMedia();
      }
    }
  }

  ordernarMedia() {
    function compare(a, b) {
      const bandA = a.media;
      const bandB = b.media;

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

  ordernarMedia2() {
    function compare(a, b) {
      const bandA = a.media;
      const bandB = b.media;

      let comparison = 0;
      if (bandA > bandB) {
        comparison = -1;
      } else if (bandA < bandB) {
        comparison = 1;
      }
      return comparison;
    }
    console.log(this.instiuicoes.sort(compare));
  }

  // Fim Ordenação Media
  // Inicio Ordenação Infraestrutura

  ordernarInfraestruturaStart() {
    var valor = document.getElementById('infraestrutura').innerHTML;
    if (valor === 'Infraestrutura') {
      document.getElementById('infraestrutura').innerHTML = 'Infraestrutura ▲';
      this.ordernarInfraestrutura();
    } else {
      if (valor === 'Infraestrutura ▲') {
        document.getElementById('infraestrutura').innerHTML = 'Infraestrutura ▼';
        this.ordernarInfraestrutura2();
      } else {
        document.getElementById('infraestrutura').innerHTML = 'Infraestrutura ▲';
        this.ordernarInfraestrutura();
      }
    }
  }

  ordernarInfraestrutura() {
    function compare(a, b) {
      const bandA = a.infraestrutura;
      const bandB = b.infraestrutura;

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

  ordernarInfraestrutura2() {
    function compare(a, b) {
      const bandA = a.infraestrutura;
      const bandB = b.infraestrutura;

      let comparison = 0;
      if (bandA > bandB) {
        comparison = -1;
      } else if (bandA < bandB) {
        comparison = 1;
      }
      return comparison;
    }
    console.log(this.instiuicoes.sort(compare));
  }

  // Fim Ordenação Infraestrutura
  // Inicio Ordenação Cordenação

  ordernarCordenacaoStart() {
    var valor = document.getElementById('cordenacao').innerHTML;
    if (valor === 'Cordenação') {
      document.getElementById('cordenacao').innerHTML = 'Cordenação ▲';
      this.ordernarCordenacao();
    } else {
      if (valor === 'Cordenação ▲') {
        document.getElementById('cordenacao').innerHTML = 'Cordenação ▼';
        this.ordernarCordenacao2();
      } else {
        document.getElementById('cordenacao').innerHTML = 'Cordenação ▲';
        this.ordernarCordenacao();
      }
    }
  }

  ordernarCordenacao() {
    function compare(a, b) {
      const bandA = a.cordenacao;
      const bandB = b.cordenacao;

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

  ordernarCordenacao2() {
    function compare(a, b) {
      const bandA = a.cordenacao;
      const bandB = b.cordenacao;

      let comparison = 0;
      if (bandA > bandB) {
        comparison = -1;
      } else if (bandA < bandB) {
        comparison = 1;
      }
      return comparison;
    }
    console.log(this.instiuicoes.sort(compare));
  }

  // Fim Ordenação Cordenação

}
