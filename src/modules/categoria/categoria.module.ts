import { Module } from '@nestjs/common';
import { CategoriaController } from './categoria.controller';

@Module({
  controllers: [CategoriaController],
})
export class CategoriaModule {}
