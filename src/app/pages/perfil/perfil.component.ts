import { UsuarioDTO } from './../../dto/usuarioDTO';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
    private router: Router) { }

  user: UsuarioDTO;

  ngOnInit(): void {
    this.obterDetalheUsuario();
  }

  exibirCPF() {
    document.getElementById('cpf').innerHTML = this.user.cpf;
  }

  obterDetalheUsuario() {
    const id = this.usuarioService.getUserId(window.localStorage.getItem('token'));
    console.log(id);
    
    this.usuarioService.ObterDetalheUsuario(id).subscribe(res => {
      this.user = res;
    });
  }

}
