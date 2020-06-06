import { Component, OnInit } from '@angular/core';
import { InstituicaoDTO } from 'src/app/dto/instituicaoDTO';
import { InstituicaoService } from 'src/app/services/instituicao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-facul',
  templateUrl: './detalhe-facul.component.html',
  styleUrls: ['./detalhe-facul.component.css']
})
export class DetalheFaculComponent implements OnInit {

  instituicao: InstituicaoDTO;
  
  constructor(private instituicaoService: InstituicaoService,
    private route: Router) { }

  ngOnInit(): void {
    this.instituicao = window.history.state.instituicao;
  }

  avaliarInstituicao(id: number){
    this.instituicaoService.obterInstituicao(id).subscribe(res => {
      this.route.navigate(['/questionario'], { state: { instituicao: res } });
    });
  }

}
