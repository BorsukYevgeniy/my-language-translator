import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { TextDto } from '@shared/dto';
import { ParseTextPipe } from '@shared/pipe';
import { TranslateService } from '@shared/service';

@Controller()
export class SsrController {
  constructor(private readonly translateService: TranslateService) {}

  @Post('translate')
  @Render('translate/translate.ejs')
  async translate(@Body(ParseTextPipe) text: TextDto) {
    const translatedText = await this.translateService.translate(text);
    return { translatedText: translatedText.text, text: text.text };
  }

  @Get('translate')
  @Render('translate/translate.ejs')
  async renderTranslatePage() {
    return { translatedText: undefined, text: undefined };
  }

  @Get('alphabet')
  @Render('translate/alphabet.ejs')
  async renderAlphabetPage() {}
}
