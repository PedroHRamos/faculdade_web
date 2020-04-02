import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarraPesquisaComponent } from '../components/barra-pesquisa/barra-pesquisa.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EstrelasComponent } from './estrelas/estrelas.component';

@NgModule({
  declarations: [
    EstrelasComponent,
    BarraPesquisaComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    BarraPesquisaComponent,
    EstrelasComponent]
})
export class ComponentsModule {}
