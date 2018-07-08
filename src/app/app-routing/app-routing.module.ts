import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { AllRegionsComponent } from '../all-regions/all-regions.component';
import { AllCountriesComponent } from '../all-countries/all-countries.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { SingleCountriesComponent } from '../single-countries/single-countries.component';

const routes: Routes = [
  { path: '', redirectTo: 'regions', pathMatch: 'full' },
  { path: 'regions', component: AllRegionsComponent },
  { path: 'allcountries', component: AllCountriesComponent },
  { path: 'allcountries/:country', component: SingleCountriesComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
