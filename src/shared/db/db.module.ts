import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService, ConfigType } from '@nestjs/config';
import dbConfig from './config/db.config';
import * as mongoose from 'mongoose';

@Module({
  imports: [ConfigModule.forFeature(dbConfig)],
  providers: [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async (
        config: ConfigType<typeof dbConfig>,
      ): Promise<typeof mongoose> => await mongoose.connect(config.uri),
      inject: [dbConfig.KEY],
    },
  ],
  exports: [],
})
export class DatabaseModule {}
