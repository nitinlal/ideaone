import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatusController } from './status/status.controller';
import { LocationController } from './location/location.controller';
import { LocationService } from './location/location.service';

@Module({
  imports: [],
  controllers: [AppController, StatusController, LocationController],
  providers: [AppService, LocationService],
})
export class AppModule {}
