import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMatrizInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
