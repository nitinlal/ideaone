import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { Location } from './location.model'

@Injectable()
export class LocationService {
    find(id: number): Observable<Location> {
        return of({
            id: 1,
            lat: 1,
            long: 2,
        })
    }
}
