import { TestBed } from '@angular/core/testing';

import { QuesitoService } from './quesito.service';

describe('QuesitoService', () => {
  let service: QuesitoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuesitoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
