import { Router } from 'express';
import TranslateRepository from '../repository/TranslateRepository';
import TranslateService from '../services/TranslateService';

const translateRouter = Router();
const translateRepository = new TranslateRepository();

translateRouter.get('/translate/:id', (req, res) => {
  try {
    const { id } = req.params;
    const number = Number(id);

    const translateNumber = new TranslateService(translateRepository);

    const word = translateNumber.execute({ number });

    return res.status(200).json(word);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default translateRouter;
