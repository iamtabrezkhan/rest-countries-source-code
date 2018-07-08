import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {

  public heading = 'Regions';
  public isArrow = false;

  constructor(private appService: AppService, private location: Location) {
    this.appService.getRegion().subscribe(
      data => {
        this.heading = data;
      }
    );
    this.appService.getArrow().subscribe(
      data => {
        this.isArrow = data;
      }
    )
  }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}
