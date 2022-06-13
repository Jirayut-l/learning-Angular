import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '@core/components/page-not-found';
import { CustomPreloadingService } from '@core/services/custom-preloading';

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
  {
    path: 'about',
    loadChildren: () => import("./modules/about/about.module").then(p => p.AboutModule),
    // canLoad: [AuthGuard], should choose 1 canLoad or data:Preload (preloadingStrategy)
    data: { preload: true }
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash: false,
      preloadingStrategy: CustomPreloadingService
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
