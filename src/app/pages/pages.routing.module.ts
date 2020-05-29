import { DetalheFaculComponent } from './detalhe-facul/detalhe-facul.component';
import { RankComponent } from './rank/rank.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { QuestionarioComponent } from './questionario/questionario.component';
import { CadastroFaculdadeComponent } from './cadastro-faculdade/cadastro-faculdade.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FaqComponent } from './faq/faq.component';
import { DashBoardComponent } from './dash-board/dash-board.component';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'menu', component: MenuComponent},
    { path: 'home', component: HomeComponent },
    { path: 'rank', component: RankComponent },
    { path: 'detalhe-faculdade', component: DetalheFaculComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'sobre-nos', component: SobreNosComponent},
    { path: 'questionario', component: QuestionarioComponent },
    { path: 'detalhe-faculdade', component: DetalheFaculComponent },
    { path: 'cadastro-faculdade', component: CadastroFaculdadeComponent},
    { path: 'ajuda', component: AjudaComponent},
    { path: 'cadastro', component: CadastroComponent},
    { path: 'faq', component: FaqComponent},
    { path: 'dash-board', component: DashBoardComponent}
    // { path: 'menu', component: MenuComponent,
    //   children: [
    //     {
    //       // path: '', component:
    //     } // Aqui rotas que virão após menu ex: menu/dashboard
    //   ]
    // }
    // { path: 'product-details/:id', component: ProductDetails,
    //     children: [
    //         { path: '', redirectTo: 'overview', pathMatch: 'full' },
    //         { path: 'overview', component: Overview },
    //         { path: 'specs', component: Specs }
    //     ]
    // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class PagesRoutingModule { }
