import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrigadoComponent } from './obrigado.component';

describe('ObrigadoComponent', () => {
  let component: ObrigadoComponent;
  let fixture: ComponentFixture<ObrigadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObrigadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrigadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
