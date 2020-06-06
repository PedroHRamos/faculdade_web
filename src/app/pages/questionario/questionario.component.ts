import { Component, OnInit } from '@angular/core';
import { QuestionarioDTO } from 'src/app/dto/questionarioDTO';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AuthService } from '../login/auth.service';
import { InstituicaoDTO } from 'src/app/dto/instituicaoDTO';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css']
})
export class QuestionarioComponent implements OnInit {

  estrutura: number;
  professores: number;
  financeiro: number;
  atendimento: number;
  coordenacao: number;
  ambienteVirtual: number;
  instituicao: InstituicaoDTO;
  questionario: QuestionarioDTO = new QuestionarioDTO();

  constructor() { }

  ngOnInit(): void {
    this.instituicao = window.history.state.instituicao;
    this.estrutura = 0;
    console.log(this.instituicao.id);
  }

  submitQuestionario() {
    console.log(this.estrutura);
    console.log(this.professores);
    console.log(this.financeiro);
    console.log(this.atendimento);
    console.log(this.coordenacao);
    console.log(this.ambienteVirtual);
    console.log(this.questionario);
    //chamar service da avaliação
  }

}
