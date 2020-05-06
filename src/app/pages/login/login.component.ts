import { AlunoDTO } from './../../dto/alunoDTO';
import { AlunoService } from './../../services/aluno.service';
import { Component, OnInit, Inject } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor(private alunoService: AlunoService) {
  }

  ngOnInit(): void {
    this.alunoService.CadastrarAluno().subscribe(res => console.log(res));
  }

}
