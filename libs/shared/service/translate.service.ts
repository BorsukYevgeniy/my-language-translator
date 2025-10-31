import { Injectable } from '@nestjs/common';
import { TextDto } from '../dto';

import { consonantLetters, finalSoftLetters } from './constants/cosntants';

@Injectable()
export class TranslateService {
  private async replace(str: string) {
    let res = str.replaceAll('Ае', 'Ӕ');
    res = res.replaceAll('ае', 'ӕ');

    res = res.replaceAll('Дже', 'Ꙉ');
    res = res.replaceAll('дже', 'ꙉ');

    res = res.replaceAll('Дж', 'Ԫ');
    res = res.replaceAll('дж', 'ԫ');

    res = res.replaceAll('Джмі', 'Ђмі');
    res = res.replaceAll('джмі', 'ђмі');

    res = res.replaceAll('Джі', 'Ђі');
    res = res.replaceAll('Джі', 'Ђі');

    res = res.replaceAll('Дзе', 'Ꙃ');
    res = res.replaceAll('дзе', 'ꙃ');

    res = res.replaceAll('Дзьо', 'Ԇӏ');
    res = res.replaceAll('дзьо', 'ԇӏ');

    res = res.replaceAll('Дзю', 'Ԇю');
    res = res.replaceAll('дзю', 'ԇю');

    res = res.replaceAll('Дзі', 'Ԇі');
    res = res.replaceAll('дзі', 'ԇі');

    res = res.replaceAll('Дзьо', 'Ԇӏ');
    res = res.replaceAll('дзьо', 'ԇӏ');

    res = res.replaceAll('Дзв', 'ꚃ');
    res = res.replaceAll('дзв', 'ꚃ');

    res = res.replaceAll('Дз', 'Ꚉ');
    res = res.replaceAll('дз', 'ꚉ');

    res = res.replaceAll('Оу', 'Ꙋ');
    res = res.replaceAll('оу', 'ꙋ');

    res = res.replaceAll('От', 'Ѿ');
    res = res.replaceAll('от', 'ѿ');

    res = res.replaceAll('Кс', 'Ѯ');
    res = res.replaceAll('кс', 'ѯ');

    res = res.replaceAll('Пс', 'Ѱ');
    res = res.replaceAll('пс', 'ѱ');

    res = res.replaceAll('Фт', 'Ѳ');
    res = res.replaceAll('фт', 'ѳ');

    res = res.replaceAll('Ан', 'Ѧ');
    res = res.replaceAll('ан', 'ѧ');

    res = res.replaceAll('Ян', 'Ѩ');
    res = res.replaceAll('ян', 'ѩ');

    res = res.replaceAll('Йон', 'Ѭ');
    res = res.replaceAll('йон', 'ѭ');

    res = res.replaceAll('Он', 'Ѫ');
    res = res.replaceAll('он', 'ѫ');

    res = res.replaceAll('Ен', 'Ꙙ');
    res = res.replaceAll('ен', 'ꙙ');

    res = res.replaceAll('Єн', 'Ꙝ');
    res = res.replaceAll('єн', 'ꙝ');

    res = res.replaceAll('Ін', 'Ꙛ');
    res = res.replaceAll('ін', 'ꙛ');

    res = res.replaceAll('Льо', 'Љӏ');
    res = res.replaceAll('льо', 'љӏ');

    res = res.replaceAll('Ньо', 'Њӏ');
    res = res.replaceAll('ньо', 'њӏ');

    res = res.replaceAll('Ль', 'Љ');
    res = res.replaceAll('ль', 'љ');

    res = res.replaceAll('Нь', 'Њ');
    res = res.replaceAll('нь', 'њ');

    res = res.replaceAll('нь', 'љ');
    res = res.replaceAll('нь', 'љ');

    res = res.replaceAll('Ст', 'Ѕ');
    res = res.replaceAll('ст', 'ѕ');

    res = res.replaceAll('Нг', 'Ҥ');
    res = res.replaceAll('нг', 'ҥ');

    res = res.replaceAll('Іа', 'Ꙗ');
    res = res.replaceAll('іа', 'ꙗ');

    res = res.replaceAll('Іє', 'Ѥ');
    res = res.replaceAll('іє', 'ѥ');

    res = res.replaceAll('Чч', 'Ꚇ');
    res = res.replaceAll('чч', 'ꚇ');

    res = res.replaceAll('Ів', 'Ѷв');
    res = res.replaceAll('ів', 'ѷв');

    res = res.replaceAll('Ії', 'Ꙓ');
    res = res.replaceAll('ії', 'ꙓ');

    res = res.replaceAll('Йо', 'Ё');
    res = res.replaceAll('йо', 'ё');

    res = res.replaceAll('Ом', 'Ѡм');
    res = res.replaceAll('ом', 'ѡм');

    res = res.replaceAll('Яє', 'Ԙ');
    res = res.replaceAll('яє', 'ԙ');

    res = res.replaceAll('Рх', 'Ԗ');
    res = res.replaceAll('рх', 'ԗ');

    res = res.replaceAll('Лх', 'Ԕ');
    res = res.replaceAll('лх', 'ԕ');

    res = res.replaceAll('Ер', 'Ър');
    res = res.replaceAll('ер', 'ър');

    res = res.replaceAll('Ор', 'Ҍр');
    res = res.replaceAll('ор', 'ҍр');

    res = res.replaceAll('Иї', 'Ӥ');
    res = res.replaceAll('иї', 'ӥ');

    res = res.replaceAll(/[бпвмф]е/giu, (match) => match[0] + 'ѣ');
    res = res.replaceAll(/[бпвмф]і/giu, (match) => match[0] + 'ꙇ');
    res = res.replaceAll(/[бпвмф]и/giu, (match) => match[0] + 'ꙑ');

    res = res.replaceAll('Ил', 'Ыл');
    res = res.replaceAll('ил', 'ыл');

    res = res.replaceAll('ьо', 'ӏ');

    res = res.replaceAll('Ді', 'Ԁ');
    res = res.replaceAll('ді', 'ԁ');

    res = res.replaceAll('Дь', 'Ԃ');

    res = res.replaceAll('Тьо', 'ፔӏ');
    res = res.replaceAll('тьо', 'ፔӏ');

    res = res.replaceAll('Ть', 'ፔ');
    res = res.replaceAll('ть', 'ፔ');

    res = res.replaceAll('Дьо', 'Ԁӏ');
    res = res.replaceAll('дьо', 'ԁӏ');

    res = res.replaceAll('Зьо', 'Зӏ');
    res = res.replaceAll('зьо', 'зӏ');

    res = res.replaceAll('Сьо', 'Сӏ');
    res = res.replaceAll('сьо', 'сӏ');

    res = res.replaceAll('Цьо', 'Ꙡӏ');
    res = res.replaceAll('цьо', 'ꙡӏ');

    res = res.replaceAll('Рьо', 'Рӏ');
    res = res.replaceAll('рьо', 'рӏ');

    res = res.replaceAll('Ин', 'Ꙟ');
    res = res.replaceAll('ин', 'ꙟ');

    res = res.replaceAll('Ува', 'Ўә ');
    res = res.replaceAll('ува', 'ўә');

    res = res.replaceAll('Шва', 'Ꚗә');
    res = res.replaceAll('шва', 'ꚗә');

    res = res.replaceAll('Цв', 'Ꚏә');
    res = res.replaceAll('цв', 'ꚏә');

    res = res.replaceAll('Шв', 'Ꚗ');
    res = res.replaceAll('шв', 'ꚗ');

    res = res.replaceAll('Цв', 'Ꚏ');
    res = res.replaceAll('цв', 'ꚏ');

    res = res.replaceAll('Ва', 'Вә');
    res = res.replaceAll('ва', 'вә');

    res = res.replaceAll('Ув', 'Ў');
    res = res.replaceAll('ув', 'ў');

    res = res.replaceAll('Чж', 'Џ');
    res = res.replaceAll('чж', 'џ');

    res = res.replaceAll('Чі', 'Ћі');
    res = res.replaceAll('чі', 'ћі');
    res = res.replaceAll('Чь', 'Ћь');
    res = res.replaceAll('чь', 'ћь');

    res = res.replaceAll('Оє', 'Ө');
    res = res.replaceAll('оє', 'ө');

    res = res.replaceAll('Хва', 'Ꚕә');
    res = res.replaceAll('хва', 'ꚕә');
    res = res.replaceAll('Хв', 'Ꚕ');
    res = res.replaceAll('хв', 'ꚕ');

    res = res.replaceAll('Шх', 'Һ');
    res = res.replaceAll('шх', 'һ');

    res = res.replaceAll('Кю', 'Ԛ');
    res = res.replaceAll('кю', 'ԛ');

    res = res.replaceAll('Дч', 'Ԭ');
    res = res.replaceAll('дч', 'ԭ');

    res = res.replaceAll('Тц', 'Ҵ');
    res = res.replaceAll('тц', 'ҵ');

    res = res.replaceAll('Коп', 'Ҁ');
    res = res.replaceAll('коп', 'ҁ');

    res = res.replaceAll('Зм', 'Ꙁ');
    res = res.replaceAll('зм', 'ꙁ');

    res = res.replaceAll('Дзе', 'Ꙁ');
    res = res.replaceAll('дзе', 'ꙁ');

    res = res.replaceAll('Тч', 'Ꚓ');
    res = res.replaceAll('тч', 'ꚓ');

    res = res.replaceAll('Тв', 'Ꚍ');
    res = res.replaceAll('тв', 'ꚍ');

    res = res.replaceAll('Дв', 'Ꚁ');
    res = res.replaceAll('дв', 'ꚁ');

    res = res.replaceAll('Тс', 'Ꚑ');
    res = res.replaceAll('тс', 'ꚑ');

    res = res.replaceAll('Ив', 'Ѵ');
    res = res.replaceAll('ив', 'ѵ');

    res = res.replaceAll('Дво', 'Двꙭ ');
    res = res.replaceAll('дво', 'двꙭ ');

    res = res.replaceAll('Обоє', 'Ꙭбє');
    res = res.replaceAll('обоє', 'ꙭбє');

    res = res.replaceAll('Окр', 'Ꚛкр');
    res = res.replaceAll('окр', 'ꚛкр');

    res = res.replaceAll('Охр', 'Ꚛхр');
    res = res.replaceAll('охр', 'ꚛхр');

    res = res.replaceAll('Ог', 'Ѻ');
    res = res.replaceAll('ог', 'ѻ');

    res = res.replaceAll('Багато', 'Багтꙮ');
    res = res.replaceAll('багато', 'багтꙮ');

    res = res.replaceAll('Много', 'Мнꙮг');
    res = res.replaceAll('много', 'мнꙮг');

    res = res.replaceAll('Оч', 'Ꙫ');
    res = res.replaceAll('оч', 'ꙫ');

    res = res.replaceAll('Ок', 'Ꙩ');
    res = res.replaceAll('ок', 'ꙩ');

    res = res.replaceAll('Очо', 'Ꚙч');
    res = res.replaceAll('очо', 'ꚙч');

    res = res.replaceAll('Оі', 'Ꙕ');
    res = res.replaceAll('оі', 'ꙕ');

    res = res.replaceAll('Аа', 'А̄');
    res = res.replaceAll('аа', 'а̄');

    res = res.replaceAll('Оо', 'О̄');
    res = res.replaceAll('оо', 'о̄');

    res = res.replaceAll('Уу', 'Ӯ');
    res = res.replaceAll('уу', 'ӯ');

    res = res.replaceAll('Ее', 'Е̄');
    res = res.replaceAll('ее', 'е̄');

    res = res.replaceAll('Ии', 'Ӣ');
    res = res.replaceAll('ии', 'ӣ');

    res = res.replaceAll('Її', 'И̃');
    res = res.replaceAll('її', 'и̃');

    res = res.replaceAll('Іі', 'Ī');
    res = res.replaceAll('іі', 'ī');

    res = res.replaceAll('Ая', 'Ӓ̄');
    res = res.replaceAll('ая', 'ӓ̄');

    res = res.replaceAll('Еє', 'Ё̄');
    res = res.replaceAll('еє', 'ё̄');

    res = res.replaceAll('Ую', 'Ӱ̄');
    res = res.replaceAll('ую', 'ӱ̄');

    res = res.replaceAll('Ойо', 'Ӧ̄');
    res = res.replaceAll('Ойо', 'ӧ̄');

    return res;
  }

  private async endOfWord(str: string): Promise<string> {
    const res = str
      .replaceAll(',', ' , ')
      .replaceAll('.', ' . ')
      .replaceAll('!', ' ! ')
      .replaceAll('?', ' ? ')
      .replaceAll(';', ' ; ')
      .replaceAll(':', ' : ')
      .replaceAll('-', ' - ');

    const words = res.split(' ');

    for (let i = 0; i < words.length; i++) {
      if (consonantLetters.includes(words[i][words[i].length - 1])) {
        words[i] = words[i].concat('ꙏ');
      } else if (
        // Check that finall letters a need to replace
        words[i].length >= 2 &&
        Object.keys(finalSoftLetters).includes(
          words[i][words[i].length - 2].concat(words[i][words[i].length - 1]),
        )
      ) {
        const wordArr = words[i].split('');

        wordArr.pop();
        const l = wordArr.pop();

        wordArr.push(finalSoftLetters[`${l}ь`]);

        words[i] = wordArr.join('');
      } else if (words[i][words[i].length - 1] === 'й') {
        const wordArr = words[i].split('');

        wordArr.pop();
        wordArr.push('ј');
        wordArr.push('ъ');

        words[i] = wordArr.join('');
      }
    }

    return words
      .join(' ')
      .replaceAll(' , ', ',')
      .replaceAll(' . ', '.')
      .replaceAll(' ! ', '!')
      .replaceAll(' ? ', '?')
      .replaceAll(' ; ', ';')
      .replaceAll(' : ', ':')
      .replaceAll(' - ', '-');
  }

  async translate(textDto: TextDto): Promise<TextDto> {
    const res = await this.replace(await this.endOfWord(textDto.text));
    return new TextDto(res);
  }
}
