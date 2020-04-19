import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroRankComponent } from './filtro-rank.component';

describe('FiltroRankComponent', () => {
  let component: FiltroRankComponent;
  let fixture: ComponentFixture<FiltroRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
