import { Component, OnInit } from '@angular/core';
import { CadastroFaculdadeDTO } from 'src/app/dto/cadastrofaculdadeDTO';

@Component({
  selector: 'app-cadastro-faculdade',
  templateUrl: './cadastro-faculdade.component.html',
  styleUrls: ['./cadastro-faculdade.component.css']
})
export class CadastroFaculdadeComponent implements OnInit {

  cadastroFaculdade: CadastroFaculdadeDTO = new CadastroFaculdadeDTO();

  constructor() { }

  ngOnInit(): void {
  }

  submitCadastroFaculdade() {
    console.log(this.cadastroFaculdade);
  }

}
