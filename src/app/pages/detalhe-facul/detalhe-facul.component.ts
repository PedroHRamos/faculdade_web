import { Component, OnInit } from '@angular/core';
import { InstituicaoDTO } from 'src/app/dto/instituicaoDTO';

@Component({
  selector: 'app-detalhe-facul',
  templateUrl: './detalhe-facul.component.html',
  styleUrls: ['./detalhe-facul.component.css']
})
export class DetalheFaculComponent implements OnInit {

  constructor() { }

  instituicao: InstituicaoDTO;

  ngOnInit(): void {
    this.instituicao = window.history.state.instituicao;
  }

}
