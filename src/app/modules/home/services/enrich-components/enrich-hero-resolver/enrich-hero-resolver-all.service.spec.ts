import { TestBed } from '@angular/core/testing';

import { EnrichHeroResolverAllService } from '@home/services/enrich-components';

describe('EnrichHeroResolverAllService', () => {
  let service: EnrichHeroResolverAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrichHeroResolverAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
