import { FormsModule } from '@angular/forms';
import { AlunoService } from './services/aluno.service';
import { ComponentsModule } from './components/components.module';
import { PagesRoutingModule } from './pages/pages.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PagesModule,
    PagesRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
