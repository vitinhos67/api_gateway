import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CONNECTION_DESAFIOS } from 'src/config/connection.rabbitmq.amqp';
import { CriarPartidaDTO } from 'src/dtos/partidas/criarPartidaDTO';

@Controller('api/v1/partidas')
export class PartidaController {
  adminBackEnd: ClientProxy;

  constructor() {
    this.adminBackEnd = CONNECTION_DESAFIOS;
  }

  @Get()
  async consultarTodasPartidas() {
    return this.adminBackEnd.send('todas-partidas', '');
  }

  @Post()
  @UsePipes(ValidationPipe)
  async criarPartida(@Body() criarPartidaDTO: CriarPartidaDTO) {
    return this.adminBackEnd.send('todas-partidas', criarPartidaDTO);
  }
}
