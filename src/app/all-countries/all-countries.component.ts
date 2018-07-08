import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import { RegionPipe } from '../region.pipe';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent implements OnInit {

  public region;
  public allCountries;
  public isLoading = true;
  public currency
  public language;

  constructor(
    private route: ActivatedRoute,
    private appService: AppService,
    private router: Router
  ) { }

  ngOnInit() {
    document.querySelector('.footer').classList.remove('active-footer');
    document.querySelector('.footer').classList.remove('active-footer-mobile');
    this.route.queryParams.subscribe(
      params => {
        this.region = params.region;
      }
    )
    this.route.queryParams.subscribe(
      params => {
        this.currency = params.currency;
      }
    )
    this.route.queryParams.subscribe(
      params => {
        this.language = params.language;
      }
    )
    if(!this.region) {
      this.appService.sendRegion('All Countries');
    }
    this.appService.getAllCountries().subscribe(
      data => {
        this.appService.sendArrow(true);
        this.isLoading = false;
        document.querySelector('.footer').classList.add('active-footer');
        document.querySelector('.footer').classList.add('active-footer-mobile');
        this.allCountries = data;
      },
      error => {
        console.log(error);
      }
    );
  }

}
