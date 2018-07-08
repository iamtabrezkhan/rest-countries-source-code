import { Component } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rest countries';
  public region;

  constructor(private appService: AppService) {
    
  }

}
