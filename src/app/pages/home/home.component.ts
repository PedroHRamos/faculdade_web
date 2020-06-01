import { InstituicaoService } from './../../services/instituicao.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormGroup } from '@angular/forms';
import { InstituicaoDTO } from 'src/app/dto/instituicaoDTO';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
    private instituicaoService: InstituicaoService,
    private route: Router) {}

  instituicoes: Array<InstituicaoDTO>;
  instituicoesFiltradas: Array<InstituicaoDTO>;
  strInstituicao = '';

  ngOnInit(): void {
    this.obterInstituicoes();
  }

  obterInstituicoes() {
    this.instituicaoService.obterInstituicoes().subscribe(res => {
      this.instituicoes = res;
    });
  }

  pesquisaInstituicao() {
    if (this.strInstituicao.length > 2) {
      this.instituicoesFiltradas = this.instituicoes.filter(x => this.strInstituicao.toLowerCase() === x.bairro.toLowerCase());
    }
  }

  detalheInstituicao(id: number) {
    this.instituicaoService.obterInstituicao(id).subscribe(res => {
      this.route.navigate(['/detalhe-faculdade'], {state: {instituicao: res}});
    });
  }

}
