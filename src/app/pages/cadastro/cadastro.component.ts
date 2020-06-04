import { Component, OnInit } from '@angular/core';
import { CadastroDTO } from 'src/app/dto/cadastroDTO';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public cadastro: CadastroDTO;

  constructor(
    private usuarioService: UsuarioService) { 
      this.cadastro = new CadastroDTO();
    }

  ngOnInit(): void {
  }

  submitCadastro() {
    console.log(this.cadastro);
    this.usuarioService.CadastrarUsuario(this.cadastro).subscribe(res => console.log(res));
  }

}
