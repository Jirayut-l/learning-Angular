import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router: Router;
  beforeEach(() => {
    guard = new AuthGuard(router);
  });
  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
