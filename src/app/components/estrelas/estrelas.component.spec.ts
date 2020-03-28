import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrelasComponent } from './estrelas.component';

describe('EstrelasComponent', () => {
  let component: EstrelasComponent;
  let fixture: ComponentFixture<EstrelasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstrelasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstrelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
