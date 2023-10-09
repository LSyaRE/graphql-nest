import { CreateActorInput } from './create-actor.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateActorInput extends PartialType(CreateActorInput) {
  @Field(() => String)
  id: string;
  
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
