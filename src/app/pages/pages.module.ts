import { RankComponent } from './rank/rank.component';
import { EstrelasComponent } from './../components/estrelas/estrelas.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { BarraPesquisaComponent } from '../components/barra-pesquisa/barra-pesquisa.component';
import { MenuComponent } from './menu/menu.component';
import { ComponentsModule } from '../components/components.module';
import { SidebarComponent } from '../components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    LoginComponent,
    // EstrelasComponent,
    // BarraPesquisaComponent,
    MenuComponent,
    RankComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
