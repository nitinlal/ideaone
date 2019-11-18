import { Controller, Post, Param, Body, Get } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { LocationService } from './location.service';
import { LocationDTO, Location } from 'src/location/location.model';

@Controller('location')
export class LocationController {
    constructor(private locationService: LocationService) { }

    @Post()
    location(@Body() locDTO: LocationDTO): Observable<string> {
        return of('this action adds a new location');
    }

    @Get('user/:id')
    find(id: number): Observable<Location> {
        return this.locationService.find(id);
    }
}
