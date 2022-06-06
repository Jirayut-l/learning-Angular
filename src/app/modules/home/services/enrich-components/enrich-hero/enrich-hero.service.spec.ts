import { TestBed } from '@angular/core/testing';
import { EnrichHeroService } from './enrich-hero.service';

describe('EnrichHeroService', () => {
  let service: EnrichHeroService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrichHeroService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
