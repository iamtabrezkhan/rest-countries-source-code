import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  private subject = new Subject<any>();
  private subject1 = new Subject<any>();

  sendRegion(region) {
    this.subject.next(region);
  }

  getRegion(): Observable<any> {
    return this.subject.asObservable();
  }

  sendArrow(isArrow:boolean) {
    this.subject1.next(isArrow);
  }

  getArrow(): Observable<any> {
    return this.subject1.asObservable();
  }

  getCountriesByRegion(region) {
    return this.http.get(`http://restcountries.eu/rest/v2/region/${region}`);
  }

  getCountriesByName(name) {
    return this.http.get(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`);
  }

  getAllCountries() {
    return this.http.get(`https://restcountries.eu/rest/v2/all`);
  }

}
