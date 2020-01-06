import { TestBed } from '@angular/core/testing';

import { RedesSocialesService } from './redes-sociales.service';

describe('RedesSocialesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RedesSocialesService = TestBed.get(RedesSocialesService);
    expect(service).toBeTruthy();
  });
});
