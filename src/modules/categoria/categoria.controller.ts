import {
  Controller,
  Body,
  Logger,
  Post,
  UsePipes,
  ValidationPipe,
  Get,
  Param,
  Put,
  BadGatewayException,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CriarCategoriaDTO } from 'src/dtos/categoria/criar-categoria.dto';
import { AtualizarCategoriaDTO } from 'src/dtos/categoria/atualizar-categoria.dto';
import { CONNECTION_RABBITMQ } from 'src/config/connection.rabbitmq.amqp';

@Controller('/api/v1/categorias')
export class CategoriaController {
  private logger = new Logger(CategoriaController.name);
  private clientAdminBackEnd: ClientProxy;

  constructor() {
    this.clientAdminBackEnd = CONNECTION_RABBITMQ;
  }

  @Post()
  @UsePipes(ValidationPipe)
  criarCategoria(@Body() criarCategoriaDTO: CriarCategoriaDTO) {
    try {
      console.log(this.clientAdminBackEnd);
      return this.clientAdminBackEnd.send('criar-categoria', criarCategoriaDTO);
    } catch (error) {
      throw new BadGatewayException(error.message);
    }
  }

  @Get()
  TodasCategorias() {
    return this.clientAdminBackEnd.send('consultar-todas-categorias', '');
  }

  @Get(':categoria')
  async CategoriaPorId(@Param('categoria') categoria: string) {
    return this.clientAdminBackEnd.send('consultar-categoria', categoria);
  }

  @Put(':categoria')
  async atualizarCategoria(
    @Param('categoria') categoria: string,
    @Body() atualizarCategoriaDTO: AtualizarCategoriaDTO,
  ) {
    return this.clientAdminBackEnd.send('atualizar-categoria', {
      categoria,
      atualizarCategoriaDTO,
    });
  }
}
