import { Module, DynamicModule } from '@nestjs/common';
import { ConfigService } from './config.service';
import { CONFIG_OPTIONS } from './config.tokens';

@Module({})
export class ConfigModule {
  static register(options: { folder: string }): DynamicModule {
    return {
      module: ConfigModule,
      providers: [{ provide: CONFIG_OPTIONS, useValue: options }, ConfigService],
      exports: [ConfigService]
    }
  }
}


// module contains the service and the contoller 
// app module  ---> config module ---> configservice 
// dynamic modules 
// app module --> configmodule with params --> configService with params
