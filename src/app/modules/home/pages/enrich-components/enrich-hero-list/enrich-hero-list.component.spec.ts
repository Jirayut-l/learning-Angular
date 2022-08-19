import { HttpClient } from '@angular/common/http';
import { EnrichHeroService } from '@home/services/enrich-components';
import { EnrichHeroListComponent } from './enrich-hero-list.component';

describe('EnrichHeroListComponent', () => {
  let component: EnrichHeroListComponent;
  let http: HttpClient;
  // let fixture: ComponentFixture<EnrichHeroListComponent>;
  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [EnrichHeroListComponent]
  //   })
  //     .compileComponents();
  // });
  beforeEach(() => {
    component = new EnrichHeroListComponent(new EnrichHeroService(http))
    // fixture = TestBed.createComponent(EnrichHeroListComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
