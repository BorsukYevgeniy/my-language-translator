import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { TextDto } from '@shared/dto';
import { ParseTextPipe } from '@shared/pipe';
import { TranslateService } from '@shared/service';

@Controller('translate')
export class SsrController {
  constructor(private readonly translateService: TranslateService) {}

  @Post()
  @Render('translate/translate.ejs')
  async translate(@Body(ParseTextPipe) text: TextDto) {
    const translatedText = await this.translateService.translate(text);
    return { translatedText: translatedText.text, text: text.text };
  }

  @Get()
  @Render('translate/translate.ejs')
  async renderTranslatePage() {
    return { translatedText: undefined, text: undefined };
  }
}
