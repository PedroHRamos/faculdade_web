import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-estrelas-brancas',
  templateUrl: './estrelas-brancas.component.html',
  styleUrls: ['./estrelas-brancas.component.css']
})
export class EstrelasBrancasComponent implements OnInit {

  estrelas: string[];

  @Output() estrelaValor = new EventEmitter();

  public avaliar(estrela: number) {

    for (let i = 0; i < estrela; i++) {
      this.estrelas[i] = 'fas fa-star';
    }

    if (estrela < 5 ) {
      for (let i = estrela; i < 5; i++) {
        this.estrelas[i] = 'far fa-star';
      }
    }
    this.estrelaValor.emit(estrela);
  }

  constructor() {

    this.estrelas = new Array();

    this.estrelas[0] = 'far fa-star';
    this.estrelas[1] = 'far fa-star';
    this.estrelas[2] = 'far fa-star';
    this.estrelas[3] = 'far fa-star';
    this.estrelas[4] = 'far fa-star';

   }

  ngOnInit(): void {
  }

}
