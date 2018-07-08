import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-all-regions',
  templateUrl: './all-regions.component.html',
  styleUrls: ['./all-regions.component.css']
})
export class AllRegionsComponent implements OnInit {


  public regionsArray = [
    'africa',
    'americas',
    'asia',
    'europe',
    'oceania'
  ]

  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  @Output() regionEvent = new EventEmitter<any>();


  ngOnInit() {
    this.appService.sendRegion('Regions');
    this.appService.sendArrow(false);
    document.querySelector('.footer').classList.remove('active-footer');
    document.querySelector('.footer').classList.add('active-footer-mobile');
  }

  goToRegionCountry(region) {
    this.router.navigate(['/allcountries'], {queryParams: { region: region }});
  }


}
