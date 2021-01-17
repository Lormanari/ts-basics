import express from 'express';
const app = express();
import {calculateBmi} from "./bmiCalculator";

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
	res.json(calculateBmi(Number(req.query.height), Number(req.query.weight)));
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});