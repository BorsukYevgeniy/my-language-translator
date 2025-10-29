import { Module } from '@nestjs/common';
import { TranslateService } from 'libs/shared/service';
import { ApiController } from './api.controller';

@Module({
  controllers: [ApiController],
  providers: [TranslateService],
})
export class ApiModule {}
