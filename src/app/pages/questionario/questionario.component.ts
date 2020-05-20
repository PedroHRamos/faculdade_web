import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css']
})
export class QuestionarioComponent implements OnInit {

  estrutura: number;

  constructor() { }

  ngOnInit(): void {
    this.estrutura = 0;
  }

}
