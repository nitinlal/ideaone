import { registerAs } from '@nestjs/config';
import * as envalid from 'envalid';

envalid.cleanEnv(process.env, {
  A: envalid.str(),
});

export default registerAs('location', () => ({
  a: process.env.A,
  database: {
    url: '',
  },
}));
