import { AlunoDTO } from './../../dto/alunoDTO';
import { AlunoService } from './../../services/aluno.service';
import { Component, OnInit, Inject } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {
  }

  aluno: AlunoDTO;
  luan = 'luan';
  alunoService: AlunoService;

  ngOnInit(): void {
  }

  teste() {

  }

}
