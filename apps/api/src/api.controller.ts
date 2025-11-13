import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { TextDto } from '@shared/dto';
import { ParseTextPipe } from '@shared/pipe';
import { TranslateService } from '@shared/service';

@Controller()
export class ApiController {
  constructor(private readonly translateService: TranslateService) {}

  @Post('translate')
  @HttpCode(HttpStatus.OK)
  async getHello(@Body(ParseTextPipe) text: TextDto): Promise<TextDto> {
    return await this.translateService.translateTo(text);
  }
}
