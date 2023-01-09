import { Module } from '@nestjs/common';
import { DesafiosController } from './desafios.controller';

@Module({
  controllers: [DesafiosController],
})
export class DesafiosModule {}
