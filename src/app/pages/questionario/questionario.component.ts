import { Component, OnInit } from '@angular/core';
import { QuestionarioDTO } from 'src/app/dto/questionarioDTO';
import { UsuarioService } from 'src/app/services/usuario.service';
import { InstituicaoDTO } from 'src/app/dto/instituicaoDTO';
import { QuesitoService } from 'src/app/services/quesito.service';
import { AvaliacaoService } from 'src/app/services/avaliacao.service';
import { QuesitoDTO } from 'src/app/dto/quesitoDTO';

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
  quesitos: Array<QuesitoDTO>;
  questionario: QuestionarioDTO = new QuestionarioDTO();

  constructor(
    private quesitoService: QuesitoService,
    private avaliacaoService: AvaliacaoService) { }

  ngOnInit(): void {
    this.instituicao = window.history.state.instituicao;
    this.estrutura = 0;
    this.obterQuesitos();
  }

  obterQuesitos() {
    this.quesitoService.obterQuesitos().subscribe(res => {
      this.quesitos = res;
    });
  }

  submitQuestionario() {
    console.log(this.quesitos);
    this.avaliacaoService.cadastrarAvaliacoes(this.quesitos).subscribe(res => console.log(res));
    // chamar service da avaliação
  }

}
