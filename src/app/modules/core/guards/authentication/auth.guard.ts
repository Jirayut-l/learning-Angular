import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private isAuthenticated = true;

  constructor(private router: Router) {
  }

  // canActivate( next: ActivatedRouteSnapshot,state: RouterStateSnapshot):
  //   Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return this.checkLogin();
  // }
  public canActivate(): boolean {
    return this.checkLogin();
  }

  private checkLogin(): boolean {
    if (this.isAuthenticated) return true;
    void this.router.navigate(['/navigate-with-routing']).then();
    return false;
  }
}
