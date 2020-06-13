import { TesteComponent } from './teste/teste.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ComponentsModule } from '../components/components.module';
import { DetalheFaculComponent } from './detalhe-facul/detalhe-facul.component';
import { HomeComponent } from './home/home.component';
import { RankComponent } from './rank/rank.component';
import { PagesRoutingModule } from './pages.routing.module';
import { QuestionarioComponent } from './questionario/questionario.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { CadastroFaculdadeComponent } from './cadastro-faculdade/cadastro-faculdade.component';
import { FaqComponent } from './faq/faq.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    MenuComponent,
    RankComponent,
    DetalheFaculComponent,
    QuestionarioComponent,
    ContatoComponent,
    SobreNosComponent,
    CadastroFaculdadeComponent,
    FaqComponent,
    CadastroComponent,
    AjudaComponent,
    DashBoardComponent,
    TesteComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PagesRoutingModule,
    FormsModule,
  ]
})
export class PagesModule { }
