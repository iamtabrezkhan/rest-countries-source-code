import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { AllRegionsComponent } from './all-regions/all-regions.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { SingleCountriesComponent } from './single-countries/single-countries.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegionPipe } from './region.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    AllRegionsComponent,
    AllCountriesComponent,
    SingleCountriesComponent,
    NotFoundComponent,
    RegionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
