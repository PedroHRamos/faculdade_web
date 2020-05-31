import { InstituicaoService } from './../../services/instituicao.service';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormGroup } from '@angular/forms';
import { InstituicaoDTO } from 'src/app/dto/instituicaoDTO';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
    private instituicaoService: InstituicaoService) {}

  instituicoes: Array<InstituicaoDTO>;
  strInstituicao: string;

  ngOnInit(): void {
    this.obterInstituicoes();
  }

  obterInstituicoes() {
    this.instituicaoService.obterInstituicoes().subscribe(res => {
      this.instituicoes = res;
    });
  }

  pesquisaInstituicao() {
    
  }

}
