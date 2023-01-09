import { Module } from '@nestjs/common';
import { CategoriaModule } from './modules/categoria/categoria.module';
import { JogadoresModule } from './modules/jogadores/jogadores.module';
import { AwsModule } from './modules/aws/aws.module';
import { DesafiosModule } from './modules/desafios/desafios.module';
import { PartidaModule } from './modules/partida/partida.module';

@Module({
  imports: [JogadoresModule, CategoriaModule, AwsModule, DesafiosModule, PartidaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
