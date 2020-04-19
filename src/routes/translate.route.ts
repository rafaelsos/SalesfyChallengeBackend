import { Router } from 'express';
import TranslateRepository from '../repository/TranslateRepository';

const translateRouter = Router();
const translateRepository = new TranslateRepository();

translateRouter.get('/translate/:id', (req, res) => {
  const { id } = req.params;
  const number = Number(id);

  const validationNumber = translateRepository.validationNumberReq(number);

  if (validationNumber) {
    return res.status(400).json({ error: validationNumber });
  }

  const word = translateRepository.translatedNumber(number);

  if (!word) {
    return res.status(400).json({ error: 'Não foi possível traduzir o numero informado...' });
  }

  return res.status(200).json(word);

  /*
  const typeNumber = Number.isInteger(number);

  if (!typeNumber) {
    return res.status(400).json({ error: 'Permitido somente numero inteiro' });
  };

  if (number < 0) {
    return res.status(400).json({ error: 'Não é permitido traduzir um numero menor que zero' });
  }

  if (number > 999) {
    return res.status(400).json({ error: 'Não é permitido traduzir um numero maior que 999' });
  }
  */

  /*
  if (number < 20) {
    word = baseNumbers.base[number];
  } else if (number < 100) {
    const rest = number % 10;
    const base = baseNumbers.base[number % 10];
    const dozens = baseNumbers.dozens[Math.floor(number / 10)];

    if (rest) {
      word = `${dozens}-${base}`;
    } else {
      word = `${dozens}`;
    }
  }
  */
});

export default translateRouter;