import { Module } from '@nestjs/common';
import { RestourantsResolver } from './restourants.resolver';

@Module({
  providers: [RestourantsResolver],
})
export class RestourantsModule {}
