import { TestBed } from '@angular/core/testing';

import { CatGameService } from './cat-game.service';

describe('CatGameService', () => {
  let service: CatGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
