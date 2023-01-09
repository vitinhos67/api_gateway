import { Module } from '@nestjs/common';
import { AwsModule } from '../aws/aws.module';

import { JogadoresController } from './jogadores.controller';

@Module({
  imports: [AwsModule],
  controllers: [JogadoresController],
})
export class JogadoresModule {}
