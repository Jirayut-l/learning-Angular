import { HttpClient } from '@angular/common/http';
import { EnrichHeroService } from './enrich-hero.service';

describe('EnrichHeroService', () => {
  let service: EnrichHeroService;
  let http: HttpClient;
  beforeEach(() => {
    service = new EnrichHeroService(http);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
