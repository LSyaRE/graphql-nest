import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Matriz {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
