import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { SsrModule } from './ssr.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(SsrModule);

  app.setBaseViewsDir(join(__dirname, '..', '..', '..', 'views'));
  app.setViewEngine('ejs');
  app.useStaticAssets(join(__dirname, '..', '..', '..', 'public'));
  app.setGlobalPrefix('ssr');
  await app.listen(process.env.port ?? 3001);
}
bootstrap();
