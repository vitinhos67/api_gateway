import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExeptionsFilter } from './common/filters/http-exception.filter';
import * as momentTimeZone from 'moment-timezone';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { TimeoutInterceptor } from './common/interceptors/timeout.interceptor';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExeptionsFilter());

  app.useGlobalInterceptors(new LoggingInterceptor(), new TimeoutInterceptor());

  Date.prototype.toJSON = function (): any {
    return momentTimeZone(this)
      .tz('America/Sao_Paulo')
      .format('YYYY-MM-DD HH:mm:ss.SSS');
  };

  await app.listen(3010);
}
bootstrap();
