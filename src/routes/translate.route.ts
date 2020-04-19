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
});

export default translateRouter;