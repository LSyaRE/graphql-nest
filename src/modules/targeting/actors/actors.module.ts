import { Module } from '@nestjs/common';
import { ActorsService } from './actors.service';
import { ActorsResolver } from './actors.resolver';
import { targetingProviders } from 'src/providers/targeting.providers';

@Module({
  providers: [...targetingProviders,ActorsResolver, ActorsService]
})
export class ActorsModule {}
