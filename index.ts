import express from 'express';
const app = express();
app.use(express.json())
import {calculateBmi} from "./bmiCalculator";
import {calculateExercises, parseExerciseArguments} from "./exerciseCalculator";

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
	res.json(calculateBmi(Number(req.query.height), Number(req.query.weight)));
});

app.post('/exercises', (request, response) => {
	const data = request.body;
	try {
		const {value1, value2} = parseExerciseArguments(data.daily_exercises, data.target);
		response.json(calculateExercises(value1, value2))
	} catch (e) {
		console.log('Error, something bad happened, message: ', e.message);
	}
})

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});