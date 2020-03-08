import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationModule } from './location/location.module';
import { StatusController } from './status/status.controller';

@Module({
  imports: [LocationModule],
  controllers: [AppController, StatusController],
  providers: [AppService],
})
export class AppModule {}
