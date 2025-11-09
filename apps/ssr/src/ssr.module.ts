import { Module } from '@nestjs/common';
import { TranslateService } from '@shared/service';
import { SsrController } from './ssr.controller';

@Module({
  controllers: [SsrController],
  providers: [TranslateService],
})
export class SsrModule {}
