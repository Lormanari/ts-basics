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

export const parseExerciseArguments = (value1: Array<number>, value2: number): dailyExerciseValues => {
	if (!value1 || !value2) throw new Error('parameters missing');
	if (Array.isArray(value1) && typeof value2 === "number") {
	  return {
		value1,
		value2
	  }
	} else {
	  throw new Error('malformatted parameters');
	}
}

export const calculateExercises = (a: Array<number>, b: number): Result => {
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

	return {
		periodLength: periodLength,
		trainingDays: a.filter(h => h > 0).length,
		success: average > b,
		rating: rank().rating,
		ratingDescription: rank().ratingDescription,
		target: b,
		average: average
	}
}