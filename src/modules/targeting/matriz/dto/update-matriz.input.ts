import { CreateMatrizInput } from './create-matriz.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMatrizInput extends PartialType(CreateMatrizInput) {
  @Field(() => Int)
  id: number;
}
