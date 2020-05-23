import { Component, OnInit } from '@angular/core';
import { CadastroDTO } from 'src/app/dto/cadastroDTO';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastro: CadastroDTO = new CadastroDTO();

  constructor() { }

  ngOnInit(): void {
  }

  submitCadastro() {
    console.log(this.cadastro);
  }

}
