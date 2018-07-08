import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-single-countries',
  templateUrl: './single-countries.component.html',
  styleUrls: ['./single-countries.component.css']
})
export class SingleCountriesComponent implements OnInit {

  public countryName;
  public isLoading = true;
  public currentCountry;

  constructor(
    private appService: AppService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    document.querySelector('.footer').classList.remove('active-footer');
    document.querySelector('.footer').classList.remove('active-footer-mobile');
    this.countryName = this.route.snapshot.paramMap.get('country');
    this.appService.sendRegion(this.countryName);
    this.appService.getCountriesByName(this.countryName).subscribe(
      data => {
        document.querySelector('.footer').classList.add('active-footer');
        document.querySelector('.footer').classList.add('active-footer-mobile');
        this.appService.sendArrow(true);
        this.isLoading = false;
        this.currentCountry = data[0];
      },
      error => {
        console.log(error);
      }
    )
  }

  sendCurrency(code) {
    this.router.navigate(['/allcountries'], {queryParams: { currency: code }});
  }
  sendLanguage(name) {
    this.router.navigate(['/allcountries'], {queryParams: { language: name }});
  }

}
