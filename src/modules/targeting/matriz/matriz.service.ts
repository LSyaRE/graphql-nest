import { Injectable } from '@nestjs/common';
import { CreateMatrizInput } from './dto/create-matriz.input';
import { UpdateMatrizInput } from './dto/update-matriz.input';

@Injectable()
export class MatrizService {
  create(createMatrizInput: CreateMatrizInput) {
    return 'This action adds a new matriz';
  }

  findAll() {
    return `This action returns all matriz`;
  }

  findOne(id: number) {
    return `This action returns a #${id} matriz`;
  }

  update(id: number, updateMatrizInput: UpdateMatrizInput) {
    return `This action updates a #${id} matriz`;
  }

  remove(id: number) {
    return `This action removes a #${id} matriz`;
  }
}
