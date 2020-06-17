import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-estrelas',
  templateUrl: './estrelas.component.html',
  styleUrls: ['./estrelas.component.css']
})
export class EstrelasComponent implements OnInit {

  estrelas: string[];
  temValor: boolean;

  @Output() estrelaValorOutput = new EventEmitter();
  @Input() estrelaValorInput: number;

  public avaliar(estrela?: number) {



      for (let i = 0; i < estrela; i++) {
        this.estrelas[i] = 'fas fa-star';
      }

      if (estrela < 5 ) {
        for (let i = estrela; i < 5; i++) {
          this.estrelas[i] = 'far fa-star';
        }
      

    }

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
    this.avaliar();
    // this.temValor = false;
    // if(this.estrelaValorInput != null || this.estrelaValorInput != undefined){
    //   this.avaliar(this.estrelaValorInput);
    //   this.temValor = true;
    // }
    // console.log('temValor',this.temValor);

  }

  ngOnChanges(): void {
    this.avaliar(this.estrelaValorInput);
    // changes.prop contains the old and the new value...
  }

}
