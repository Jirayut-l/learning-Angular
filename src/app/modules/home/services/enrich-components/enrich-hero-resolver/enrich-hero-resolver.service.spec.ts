import { EnrichHeroService } from '@home/services/enrich-components';
import { EnrichHeroResolverService } from './enrich-hero-resolver.service';

describe('EnrichHeroResolverService', () => {
  let service: EnrichHeroResolverService;
  let enrichHeroService: EnrichHeroService;
  beforeEach(() => {
    service = new EnrichHeroResolverService(enrichHeroService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
