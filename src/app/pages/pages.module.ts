import { EstrelasComponent } from './../components/estrelas/estrelas.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { BarraPesquisaComponent } from '../components/barra-pesquisa/barra-pesquisa.component';

@NgModule({
  declarations: [
    LoginComponent,
    EstrelasComponent,
    BarraPesquisaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
