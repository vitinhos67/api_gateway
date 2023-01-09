import { Module } from '@nestjs/common';
import { PartidaController } from './partida.controller';

@Module({
  controllers: [PartidaController],
})
export class PartidaModule {}
