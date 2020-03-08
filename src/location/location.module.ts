import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService, ConfigType } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import locationConfig from './config/location.config';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';
import { DatabaseModule } from '../shared/db/db.module';
import { types } from '@babel/core';

@Module({
  imports: [
    ConfigModule.forFeature(locationConfig),
    DatabaseModule.withConfig(
      (configService: ConfigType<typeof locationConfig>) =>
        configService.database,
    ),
  ],
  controllers: [LocationController],
  providers: [LocationService],
})
export class LocationModule {}
