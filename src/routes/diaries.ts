import express from 'express';
import * as diaryServices from '../services/diaryServices';
import toNewDiaryEntry from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
	res.send(diaryServices.getEntriesWithoutSensityInfo());
});

router.get('/:id', (req, res) => {
	const diary = diaryServices.findById(Number(req.params.id));
	return diary != null ? res.send(diary) : res.sendStatus(404);
});

router.post('/', (req, res) => {
	try {
		const newDiaryEntry = toNewDiaryEntry(req.body);

		const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry);

		res.json(addedDiaryEntry);
	} catch (err) {
		res.status(400).send(`Ups! we're in troubles (${err})`)
	}
});

export default router
