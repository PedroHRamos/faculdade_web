import { Component, OnInit } from '@angular/core';
import { CadastroDTO } from 'src/app/dto/cadastroDTO';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Validators } from '@angular/forms';
import { variable } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public cadastro: CadastroDTO;
  cadastroBuilder: any;
  mensagem: string;
  existeMensagem: boolean;

  constructor(
    private route: Router,
    private usuarioService: UsuarioService) {
      this.cadastro = new CadastroDTO();
    }

  ngOnInit(): void {
    this.cadastro = this.cadastroBuilder.group({
        nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
        email: [null, Validators.email],
        username: [null, Validators.required],
        senha: [null, [Validators.required, Validators.minLength(6)]],
        confirmacaosenha: [null, [Validators.required, Validators.min(6)]],
        nascimento: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
        cpf: [null, [Validators.required, Validators.minLength(11)]]
    });
  }

  submitCadastro() {
    console.log(this.cadastro);
    if (this.cadastro.senha === this.cadastro.confirmarsenha) {
       this.usuarioService.CadastrarUsuario(this.cadastro).subscribe(res => console.log(res));
       this.route.navigate(['/rank']);
    } else {
      this.mensagem = 'As senhas não conferem';
      this.existeMensagem = true;
    }
  }

}
