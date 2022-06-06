import { TestBed } from '@angular/core/testing';
import { EnrichHeroDataService } from './enrich-hero-data.service';

describe('EnrichHeroDataService', () => {
  let service: EnrichHeroDataService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrichHeroDataService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
