import { Injectable } from '@nestjs/common';
import { TextDto } from '../dto';

import { consonantLetters, finalSoftLetters } from './constants/cosntants';

@Injectable()
export class TranslateService {
  private async replace(str: string) {
    let res = str
      .replaceAll('Ае', 'Ӕ')
      .replaceAll('ае', 'ӕ')

      .replaceAll('Дже', 'Ꙉ')
      .replaceAll('дже', 'ꙉ')

      .replaceAll('Дж', 'Ԫ')
      .replaceAll('дж', 'ԫ')

      .replaceAll('Джмі', 'Ђмі')
      .replaceAll('джмі', 'ђмі')

      .replaceAll('Джі', 'Ђі')
      .replaceAll('джі', 'ђі')

      .replaceAll('Дзе', 'Ꙃ')
      .replaceAll('дзе', 'ꙃ')

      .replaceAll('Дзьо', 'Ԇӏ')
      .replaceAll('дзьо', 'ԇӏ')

      .replaceAll('Дзю', 'Ԇю')
      .replaceAll('дзю', 'ԇю')

      .replaceAll('Дзя', 'Ԇя')
      .replaceAll('дзя', 'ԇя')

      .replaceAll('Дзі', 'Ԇі')
      .replaceAll('дзі', 'ԇі')

      .replaceAll('Дзв', 'ꚃ')
      .replaceAll('дзв', 'ꚃ')

      .replaceAll('Дз', 'Ꚉ')
      .replaceAll('дз', 'ꚉ')

      .replaceAll('Оу', 'Ꙋ')
      .replaceAll('оу', 'ꙋ')

      .replaceAll('От', 'Ѿ')
      .replaceAll('от', 'ѿ')

      .replaceAll('Кс', 'Ѯ')
      .replaceAll('кс', 'ѯ')

      .replaceAll('Пс', 'Ѱ')
      .replaceAll('пс', 'ѱ')

      .replaceAll('Фт', 'Ѳ')
      .replaceAll('фт', 'ѳ')

      .replaceAll('Іо', 'Ҩ')
      .replaceAll('іо', 'ҩ')

      .replaceAll('Ан', 'Ѧ')
      .replaceAll('ан', 'ѧ')

      .replaceAll('Ян', 'Ѩ')
      .replaceAll('ян', 'ѩ')

      .replaceAll('Йон', 'Ѭ')
      .replaceAll('йон', 'ѭ')

      .replaceAll('Он', 'Ѫ')
      .replaceAll('он', 'ѫ')

      .replaceAll('Ен', 'Ꙙ')
      .replaceAll('ен', 'ꙙ')

      .replaceAll('Єн', 'Ꙝ')
      .replaceAll('єн', 'ꙝ')

      .replaceAll('Ін', 'Ꙛ')
      .replaceAll('ін', 'ꙛ')

      .replaceAll('Льо', 'Љӏ')
      .replaceAll('льо', 'љӏ')

      .replaceAll('Ньо', 'Њӏ')
      .replaceAll('ньо', 'њӏ')

      .replaceAll('Ль', 'Љ')
      .replaceAll('ль', 'љ')

      .replaceAll('Нь', 'Њ')
      .replaceAll('нь', 'њ')

      .replaceAll('Ст', 'Ѕ')
      .replaceAll('ст', 'ѕ')

      .replaceAll('Нг', 'Ҥ')
      .replaceAll('нг', 'ҥ')

      .replaceAll('Іа', 'Ꙗ')
      .replaceAll('іа', 'ꙗ')

      .replaceAll('Іє', 'Ѥ')
      .replaceAll('іє', 'ѥ')

      .replaceAll('Чч', 'Ꚇ')
      .replaceAll('чч', 'ꚇ')

      .replaceAll('Ір', 'Ѷр')
      .replaceAll('ір', 'ѷр')

      .replaceAll('Йо', 'Ё')
      .replaceAll('йо', 'ё')

      .replaceAll('Ом', 'Ѡм')
      .replaceAll('ом', 'ѡм')

      .replaceAll('Яє', 'Ԙ')
      .replaceAll('яє', 'ԙ')

      .replaceAll('Рх', 'Ԗ')
      .replaceAll('рх', 'ԗ')

      .replaceAll('Лх', 'Ԕ')
      .replaceAll('лх', 'ԕ')

      .replaceAll('Ер', 'Ър')
      .replaceAll('ер', 'ър')

      .replaceAll('Єр', 'Ъ̈р')
      .replaceAll('єр', 'ъ̈р')

      .replaceAll('Еер', 'Ъ̄р')
      .replaceAll('еер', 'ъ̄р')

      .replaceAll('Еєр', 'Ъ̈̄р')
      .replaceAll('еєр', 'ъ̈̄р')

      .replaceAll('Ор', 'Ҍр')
      .replaceAll('ор', 'ҍр')

      .replaceAll('Иї', 'Ӥ')
      .replaceAll('иї', 'ӥ')

      .replaceAll('Єєв', 'Ӭ̄в')
      .replaceAll('єєв', 'ӭ̄в')

      .replaceAll('Ил', 'Ыл')
      .replaceAll('ил', 'ыл')
      .replaceAll(/[жшЖШ]ив/gu, (m) => m[0] + 'ы̆')

      .replaceAll('Жи', 'Жы')
      .replaceAll('жи', 'жы')

      .replaceAll('Ши', 'Шы')
      .replaceAll('ши', 'шы')

      .replaceAll('Ив', 'Ы̆')
      .replaceAll('ив', 'ы̆')

      .replaceAll('Оєв', 'Ө̆')
      .replaceAll('оєв', 'Ө̆')

      .replaceAll('Иил', 'Ы̄л')
      .replaceAll('иил', 'ы̄л')

      .replaceAll(/[бпвмфБПВМФ]е/gu, (match) => match[0] + 'ѣ')
      .replaceAll(/[бпвмфБПВМФ]є/gu, (match) => match[0] + 'ꙓ')
      .replaceAll(/[бпвмфБПВМФ]і/gu, (match) => match[0] + 'ꙇ')
      .replaceAll(/[бпвмфБПВМФ]и/gu, (match) => match[0] + 'ꙑ')

      .replaceAll(/Є[бпвмф]/gu, (match) => 'Ꙓ' + match[1])
      .replaceAll(/Е[бпвмф]/gu, (match) => 'Ѣ' + match[1])
      .replaceAll(/И[бпмф]/gu, (match) => 'Ꙑ' + match[1])
      .replaceAll(/І[бпвмф]/gu, (match) => 'Ꙇ' + match[1])

      .replaceAll(/є[бпвмф]/gu, (match) => 'ꙓ' + match[1])
      .replaceAll(/е[бпвмф]/gu, (match) => 'ѣ' + match[1])
      .replaceAll(/и[бпмф]/gu, (match) => 'ꙑ' + match[1])
      .replaceAll(/і[бпвмф]/gu, (match) => 'ꙇ' + match[1])

      .replaceAll('Тьо', 'ፔӏ')
      .replaceAll('тьо', 'ፔӏ')

      .replaceAll('Дьо', 'Ԁӏ')
      .replaceAll('дьо', 'ԁӏ')

      .replaceAll('Зьо', 'Зӏ')
      .replaceAll('зьо', 'зӏ')

      .replaceAll('Сьо', 'Сӏ')
      .replaceAll('сьо', 'сӏ')

      .replaceAll('Цьо', 'Ꙡӏ')
      .replaceAll('цьо', 'ꙡӏ')

      .replaceAll('Рьо', 'Рӏ')
      .replaceAll('рьо', 'рӏ')

      .replaceAll('ьо', 'ӏ')

      .replaceAll('Ді', 'Ԁ')
      .replaceAll('ді', 'ԁ')

      .replaceAll('Сь', 'Ԍ')
      .replaceAll('Зь', 'Ԅ')
      .replaceAll('Дь', 'Ԃ')

      .replaceAll('Ть', 'ፔ')
      .replaceAll('ть', 'ፔ')

      .replaceAll('Ин', 'Ꙟ')
      .replaceAll('ин', 'ꙟ')

      .replaceAll('Ува', 'Ўә ')
      .replaceAll('ува', 'ўә')

      .replaceAll('Шва', 'Ꚗә')
      .replaceAll('шва', 'ꚗә')

      .replaceAll('Цв', 'Ꚏә')
      .replaceAll('цв', 'ꚏә')

      .replaceAll('Шв', 'Ꚗ')
      .replaceAll('шв', 'ꚗ')

      .replaceAll('Цв', 'Ꚏ')
      .replaceAll('цв', 'ꚏ')

      .replaceAll('Ва', 'Вә')
      .replaceAll('ва', 'вә')

      .replaceAll('Аав', 'Ә̄')
      .replaceAll('Аав', 'ә̄')

      .replaceAll('Ав', 'Әв')
      .replaceAll('ав', 'әв')

      .replaceAll('Ув', 'Ў')
      .replaceAll('ув', 'ў')

      .replaceAll('Чж', 'Џ')
      .replaceAll('чж', 'џ')

      .replaceAll('Чі', 'Ћі')
      .replaceAll('чі', 'ћі')
      .replaceAll('Чь', 'Ћь')
      .replaceAll('чь', 'ћь')

      .replaceAll('Обоє', 'Ꙭбє')
      .replaceAll('обоє', 'ꙭбє')

      .replaceAll('Оє', 'Ө')
      .replaceAll('оє', 'ө')

      .replaceAll('Хва', 'Ꚕә')
      .replaceAll('хва', 'ꚕә')
      .replaceAll('Хв', 'Ꚕ')
      .replaceAll('хв', 'ꚕ')

      .replaceAll('Шх', 'Һ')
      .replaceAll('шх', 'һ')

      .replaceAll('Кю', 'Ԛ')
      .replaceAll('кю', 'ԛ')

      .replaceAll('Дч', 'Ԭ')
      .replaceAll('дч', 'ԭ')

      .replaceAll('Тц', 'Ҵ')
      .replaceAll('тц', 'ҵ')

      .replaceAll('Коп', 'Ҁ')
      .replaceAll('коп', 'ҁ')

      .replaceAll('Зм', 'Ꙁ')
      .replaceAll('зм', 'ꙁ')

      .replaceAll('Тч', 'Ꚓ')
      .replaceAll('тч', 'ꚓ')

      .replaceAll('Тв', 'Ꚍ')
      .replaceAll('тв', 'ꚍ')

      .replaceAll('Дв', 'Ꚁ')
      .replaceAll('дв', 'ꚁ')

      .replaceAll('Тс', 'Ꚑ')
      .replaceAll('тс', 'ꚑ')

      .replaceAll('Ир', 'Ѵр')
      .replaceAll('ир', 'ѵр')

      .replaceAll('Дво', 'Двꙭ ')
      .replaceAll('дво', 'двꙭ ')

      .replaceAll('Окр', 'Ꚛкр')
      .replaceAll('окр', 'ꚛкр')

      .replaceAll('Охр', 'Ꚛхр')
      .replaceAll('охр', 'ꚛхр')

      .replaceAll('Багато', 'Багтꙮ')
      .replaceAll('багато', 'багтꙮ')

      .replaceAll('Много', 'Мнꙮг')
      .replaceAll('много', 'мнꙮг')

      .replaceAll('Ог', 'Ѻ')
      .replaceAll('ог', 'ѻ')

      .replaceAll('Оч', 'Ꙫ')
      .replaceAll('оч', 'ꙫ')

      .replaceAll('Ок', 'Ꙩ')
      .replaceAll('ок', 'ꙩ')

      .replaceAll('Очо', 'Ꚙч')
      .replaceAll('очо', 'ꚙч')

      .replaceAll('Оі', 'Ꙕ')
      .replaceAll('оі', 'ꙕ')

      .replaceAll('Аа', 'А̄')
      .replaceAll('аа', 'а̄')

      .replaceAll('Оо', 'О̄')
      .replaceAll('оо', 'о̄')

      .replaceAll('Уу', 'Ӯ')
      .replaceAll('уу', 'ӯ')

      .replaceAll('Ее', 'Е̄')
      .replaceAll('ее', 'е̄')

      .replaceAll('Ии', 'Ӣ')
      .replaceAll('ии', 'ӣ')

      .replaceAll('Її', 'Ї̄')
      .replaceAll('її', 'ї̄')

      .replaceAll('Іі', 'Ī')
      .replaceAll('іі', 'ī')

      .replaceAll('Ая', 'Ӓ̄')
      .replaceAll('ая', 'ӓ̄')

      .replaceAll('Еє', 'Ё̄')
      .replaceAll('еє', 'ё̄')

      .replaceAll('Ую', 'Ӱ̄')
      .replaceAll('ую', 'ӱ̄')

      .replaceAll('Ойо', 'Ӧ̄')
      .replaceAll('Ойо', 'ӧ̄')

      .replaceAll('Зжв', 'Ꚅ̆')
      .replaceAll('зжв', 'ꚅ̆')

      .replaceAll('Зж', 'Ꚅ')
      .replaceAll('зж', 'ꚅ')

      .replaceAll('Ий', 'Й̵')
      .replaceAll('ий', 'й̵')

      .replaceAll('Ій', 'Ҋ')
      .replaceAll('ій', 'ҋ')

      .replaceAll('Иј', 'Й̵')
      .replaceAll('иј', 'й̵')

      .replaceAll('Іј', 'Ҋ')
      .replaceAll('іј', 'ҋ')

      .replaceAll('Єю', 'Є̈')
      .replaceAll('єю', 'є̈')

      .replaceAll('Елв', 'Э̆л')
      .replaceAll('елв', 'э̆л')

      .replaceAll('Ел', 'Эл')
      .replaceAll('ел', 'эл')

      .replaceAll('Єл', 'Ӭл')
      .replaceAll('єл', 'ӭл')

      .replaceAll('Чк', 'Ҽ')
      .replaceAll('чк', 'ҽ')

      .replaceAll('Чн', 'Ҿ')
      .replaceAll('чн', 'ҿ')

      .replaceAll('Зн', 'Ӡ')
      .replaceAll('зн', 'ӡ')

      .replaceAll('Ар', 'Ьр')
      .replaceAll('ар', 'ьр')

      .replaceAll('Ат', 'Ꙏт')
      .replaceAll('ат', 'ꙏт')

      .replaceAll('Яв', 'Ӛв')
      .replaceAll('яв', 'ӛв')
      .replaceAll('вя', 'вӛ')

      .replaceAll('Юю', 'Ю̄')
      .replaceAll('юю', 'ю̄')

      .replaceAll('Юв', 'Ю̆')
      .replaceAll('юв', 'ю̆')

      .replaceAll('Яя', 'Я̄')
      .replaceAll('яя', 'я̄')

      .replaceAll('Ов', 'О̆')
      .replaceAll('ов', 'о̆')

      .replaceAll('Ює', 'Ӫ')
      .replaceAll('ює', 'ӫ')

      .replaceAll(/дд|тт|зз|сс|цц|лл|нн|жж|шш|рр|вв/gi, (m) => m[0] + '̃')
      .replaceAll(/Дд|Тт|Зз|Сс|Цц|Лл|Нн|Жж|Шш|Рр|Вв/g, (m) => m[0] + '̃')

      .replaceAll(/Зв|Зг|Зд|Зр|Зс|Зт|Зх|Зц/g, (m) => m[1].toUpperCase() + '̌')
      .replaceAll(/зв|зг|зд|зр|зс|зт|зх|зц/g, (m) => m[1] + '̌')

      .replaceAll('Ао', 'А̊')
      .replaceAll('ао', 'а̊')

      .replaceAll('Уо', 'У̊')
      .replaceAll('уо', 'у̊');

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
      } else if (
        words[i][words[i].length - 1] === 'ї' &&
        words[i][words[i].length - 2] === 'і'
      ) {
        const wordArr = words[i].split('');

        wordArr.pop();
        wordArr.pop();
        wordArr.push('ї');

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
