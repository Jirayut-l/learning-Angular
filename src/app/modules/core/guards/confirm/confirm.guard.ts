import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { NavigateHeroDetailComponent } from '@home/pages/navigate-with-routing/navigate-hero-detail';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmGuard implements CanDeactivate<NavigateHeroDetailComponent> {
  public canDeactivate(): Observable<boolean> {
    return ConfirmGuard.showConfirm();
  }

  private static showConfirm(): Observable<boolean> {
    const confirmation = window.confirm('Are you sure?');
    return of(confirmation);
  }
}
