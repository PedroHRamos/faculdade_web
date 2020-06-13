import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
    private router: Router) { }

  logedUser = false;

  ngOnInit(): void {
    this.userLoged();
  }

  userLoged() {
    this.logedUser = this.usuarioService.isUserLoggedIn();
  }

  logOut() {
    this.logedUser = false;
    window.localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
