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
      throw Error('Somente números inteiros podem ser traduzidos');
    };

    if (number < 1) {
      throw Error('Não é permitido traduzir um número menor que 1');
    }

    if (number > 999999999999) {
      throw Error('Não é permitido trduzir um número maior que 999999999999');
    }

    const word = this.translateRepository.translateNumber(number);

    if (!word) {
      throw Error('Não foi possível traduzir o numero informado...');
    }

    return word;
  }
}

export default TranslateService;