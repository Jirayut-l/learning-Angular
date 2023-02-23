import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptorService } from '@core/authentication/interceptor';
import { CoreModule } from '@core/core.module';
import { EnrichHeroDataService } from '@home/services/enrich-components';
import { MyServiceService } from '@shared/service/my-service.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(EnrichHeroDataService),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }, MyServiceService],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
