interface Result {
	periodLength: number,
	trainingDays: number,
	success: Boolean,
	rating: number,
	ratingDescription: string,
	target: number,
	average: number,
}
interface dailyExerciseValues {
	value1: Array<number>;
	value2: number;
}

const parseExerciseArguments = (args: Array<string>): dailyExerciseValues => {
	if (args.length < 4) throw new Error('Not enough arguments');
	const exerciseHrsArray = args.slice(2, args.length).map(arg => Number(arg));
	if (exerciseHrsArray.every(h => !isNaN(h))) {
	  return {
		value1: exerciseHrsArray.slice(1, exerciseHrsArray.length),
		value2: exerciseHrsArray[0]
	  }
	} else {
	  throw new Error('Provided values were not numbers!');
	}
}

const calculateExercises = (a: Array<number>, b: number): void => {
	const periodLength = a.length;

	const average = a.reduce((b, c) => b + c, 0) / periodLength;
	const rank = ()=> {
		if(average < b) {
			return {
				rating: 1,
				ratingDescription: "bad, more exercises is needed"
			}
		} else if (average <= b && b - average <= 1) {
			return {
				rating: 2,
				ratingDescription: "not too bad but could be better"
			}
		} else {
			return {
				rating: 3,
				ratingDescription: "Great, you have achived goal"
			}
		}
	}

	const exerciseResult = {
		periodLength: periodLength,
		trainingDays: a.filter(h => h > 0).length,
		success: average > b,
		rating: rank().rating,
		ratingDescription: rank().ratingDescription,
		target: b,
		average: average
	}
	console.log(exerciseResult);
}

// calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2);

try {
	const { value1, value2 } = parseExerciseArguments(process.argv);
	calculateExercises(value1, value2);
} catch (e) {
	console.log('Error, something bad happened, message: ', e.message);
}