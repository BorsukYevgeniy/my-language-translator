import { NestFactory } from '@nestjs/core';
import { SsrModule } from './ssr.module';

async function bootstrap() {
  const app = await NestFactory.create(SsrModule);

  app.setGlobalPrefix('ssr');
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
