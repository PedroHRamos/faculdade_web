import { Component, OnInit } from '@angular/core';
import { ContatoDTO } from 'src/app/dto/contatoDTO';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  contato: ContatoDTO = new ContatoDTO();

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  submitContato() {
    console.log(this.contato);
  }

}
