import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatusController } from './status/status.controller';
import { LocationController } from './location/location.controller';
import { LocationService } from './location/location.service';
import { LocationModule } from './location/location.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [LocationModule, ConfigModule.register()],
  controllers: [AppController, StatusController],
  providers: [AppService],
})
export class AppModule { }
