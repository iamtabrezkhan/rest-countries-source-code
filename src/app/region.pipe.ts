import { Pipe, PipeTransform } from '@angular/core';
import { AppService } from './app.service';
import { isNgTemplate } from '@angular/compiler';

@Pipe({
  name: 'filterPipe'
})
export class RegionPipe implements PipeTransform {

  public filteredCountries: any[];

  constructor(private appService: AppService) {}

  transform(values: any[], region:any, currency:any, language:any): any {
    if(!region && !currency && !language) {
      return values;
    }
    else if (region) {
      this.appService.sendRegion(region);
      return values.filter(
        value => value.region.toLowerCase() === region.toLowerCase()
      );
    } else if(language) {
      this.appService.sendRegion('Language filter applied: '+language);
      return values.filter(
        value => {
          for(let lang of value.languages) {
            if(lang.name === language) {
              return true;
            }
          }
        }
      );
    } else {
      this.appService.sendRegion('Currency filter applied: '+currency);
      return values.filter(
        value => {
          for(let cur of value.currencies) {
            if(cur.code === currency) {
              return true;
            }
          }
        }
      );
    }
  }

}