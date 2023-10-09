import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Topic {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
