import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheFaculComponent } from './detalhe-facul.component';

describe('DetalheFaculComponent', () => {
  let component: DetalheFaculComponent;
  let fixture: ComponentFixture<DetalheFaculComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheFaculComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheFaculComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
