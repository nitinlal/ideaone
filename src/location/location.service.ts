import { Injectable, Inject } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { Location } from './location.model';
import { ConfigType } from '@nestjs/config';
import locationConfig from './config/location.config';

@Injectable()
export class LocationService {
  constructor(
    @Inject(locationConfig.KEY)
    private config: ConfigType<typeof locationConfig>,
  ) {
    this.config.a;
  }
  find(id: number): Observable<Location> {
    return of({
      id: 1,
      lat: 1,
      long: 2,
      config: this.config.a,
    });
  }
}
