import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroAvaliacoesComponent } from './filtro-avaliacoes.component';

describe('FiltroAvaliacoesComponent', () => {
  let component: FiltroAvaliacoesComponent;
  let fixture: ComponentFixture<FiltroAvaliacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroAvaliacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroAvaliacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
