import { Controller, Get } from '@nestjs/common';
import { SsrService } from './ssr.service';

@Controller()
export class SsrController {
  constructor(private readonly ssrService: SsrService) {}

  @Get()
  getHello(): string {
    return this.ssrService.getHello();
  }
}
