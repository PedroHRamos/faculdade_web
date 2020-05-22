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
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PagesRoutingModule,
    FormsModule,
  ]
})
export class PagesModule { }
