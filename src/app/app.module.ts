import { PagesRoutingModule } from './pages/pages.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AlunoPipe } from './pipes/aluno.pipe';
import { InputComponent } from './components/input/input.component';
import { PagesModule } from './pages/pages.module';
import { EstrelasComponent } from './components/estrelas/estrelas.component';
import { BarraPesquisaComponent } from './components/barra-pesquisa/barra-pesquisa.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BarraPesquisaComponent
  ],
  imports: [
    BrowserModule,
    PagesRoutingModule,
    PagesModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
