import { Module } from '@nestjs/common';
import { MatrizService } from './matriz.service';
import { MatrizResolver } from './matriz.resolver';

@Module({
  providers: [MatrizResolver, MatrizService]
})
export class MatrizModule {}
