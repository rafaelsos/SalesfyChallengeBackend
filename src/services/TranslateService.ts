import TranslateRepository from '../repository/TranslateRepository';

interface Request {
  number: number;
}

class TranslateService {
  private translateRepository: TranslateRepository;

  constructor(translateRepository: TranslateRepository) {
    this.translateRepository = translateRepository;
  }

  public execute({ number }: Request) {
    const typeNumber = Number.isInteger(number);
    if (!typeNumber) {
      throw Error('Permitido somente numero inteiro');
    };

    if (number < 0) {
      throw Error('Não é permitido traduzir um numero menor que zero');
    }

    if (number > 999999999) {
      throw Error('Não é permitido traduzir um numero maior que 999999999');
    }

    const word = this.translateRepository.translatedNumber(number);

    if (!word) {
      throw Error('Não foi possível traduzir o numero informado...');
    }

    return word;
  }
}

export default TranslateService;