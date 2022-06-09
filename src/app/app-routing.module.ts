import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '@core/components/page-not-found';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inputoutput',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import("./modules/home/home.module").then(p => p.HomeModule)
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
