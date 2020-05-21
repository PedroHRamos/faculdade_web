import { Component, OnInit } from '@angular/core';
import { PesquisaDTO } from 'src/app/dto/PesquisaDTO';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  pesquisa: PesquisaDTO
  constructor(private usuarioService: UsuarioService) {
    this.pesquisa = new PesquisaDTO();
   }

  ngOnInit(): void {
  }
 teclaPressionada() {
   console.log(this.pesquisa);
 } 
}
