import { Module } from '@nestjs/common';
import { SsrController } from './ssr.controller';
import { SsrService } from './ssr.service';

@Module({
  imports: [],
  controllers: [SsrController],
  providers: [SsrService],
})
export class SsrModule {}
