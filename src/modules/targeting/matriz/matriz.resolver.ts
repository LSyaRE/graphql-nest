import { Resolver, Query, Mutation, Args, Int, Subscription } from '@nestjs/graphql';
import { MatrizService } from './matriz.service';
import { Matriz } from './entities/matriz.entity';
import { CreateMatrizInput } from './dto/create-matriz.input';
import { UpdateMatrizInput } from './dto/update-matriz.input';

@Resolver(() => Matriz)
export class MatrizResolver {
  constructor(private readonly matrizService: MatrizService) {}

  @Mutation(() => Matriz)
  createMatriz(@Args('createMatrizInput') createMatrizInput: CreateMatrizInput) {
    return this.matrizService.create(createMatrizInput);
  }

  @Subscription(() => [Matriz], { name: 'matriz' })
  findAll() {
    return this.matrizService.findAll();
  }

  @Query(() => Matriz, { name: 'matriz' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.matrizService.findOne(id);
  }

  @Mutation(() => Matriz)
  updateMatriz(@Args('updateMatrizInput') updateMatrizInput: UpdateMatrizInput) {
    return this.matrizService.update(updateMatrizInput.id, updateMatrizInput);
  }

  @Mutation(() => Matriz)
  removeMatriz(@Args('id', { type: () => Int }) id: number) {
    return this.matrizService.remove(id);
  }
}
