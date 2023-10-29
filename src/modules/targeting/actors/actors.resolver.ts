import { Resolver, Query, Mutation, Args, Int, Subscription } from '@nestjs/graphql';
import { ActorsService } from './actors.service';
import { Actor } from './entities/actor.entity';
import { CreateActorInput } from './dto/create-actor.input';
import { UpdateActorInput } from './dto/update-actor.input';

@Resolver(() => Actor)
export class ActorsResolver {
  constructor(private readonly actorsService: ActorsService) { }

  @Mutation(() => Actor)
  createActor(@Args('createActorInput') createActorInput: CreateActorInput) {
    return this.actorsService.create(createActorInput);
  }

  @Subscription((of) => Actor, { name: 'actors' })
  findAll() {
    return this.actorsService.findAll();
  }

  @Query(() => Actor, { name: 'actor' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.actorsService.findOne(id);
  }

  @Mutation(() => Actor)
  updateActor(@Args('updateActorInput') updateActorInput: UpdateActorInput) {
    return this.actorsService.update(updateActorInput.id, updateActorInput);
  }

  @Mutation(() => Actor)
  removeActor(@Args('id', { type: () => String }) id: string) {
    return this.actorsService.remove(id);
  }
}
