import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrelasBrancasComponent } from './estrelas-brancas.component';

describe('EstrelasBrancasComponent', () => {
  let component: EstrelasBrancasComponent;
  let fixture: ComponentFixture<EstrelasBrancasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstrelasBrancasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstrelasBrancasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
