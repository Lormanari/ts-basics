interface Values {
	height: number;
	weight: number;
}

const parseArguments = (args: Array<string>): Values => {
	if (args.length < 4) throw new Error('Not enough arguments');
	if (args.length > 4) throw new Error('Too many arguments');

	if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
	  return {
		height: Number(args[2]),
		weight: Number(args[3])
	  }
	} else {
	  throw new Error('Provided values were not numbers!');
	}
}

const calculateBmi = (height: number, weight: number) => {
	const bmi = weight/Math.pow(height/100, 2)
	if(bmi < 15) console.log("Very severely underweight");
	if(bmi >=15 && bmi < 16) console.log( "Severely underweight");
	if(bmi >=16 && bmi < 18.5) console.log( "Underweight");
	if(bmi >=18.5 && bmi < 25) console.log( "Normal (healthy weight)");
	if(bmi >=25 && bmi < 30) console.log( "Overweight");
	if(bmi >=30 && bmi < 35) console.log( "Obese Class I (Moderately obese)");
	if(bmi >=35 && bmi < 40) console.log( "Obese Class II (Severely obese)");
	if(bmi >=40) console.log( "Obese Class III (Very severely obese)");

}

try {
	const {height, weight } = parseArguments (process.argv);
	calculateBmi(height, weight);
} catch (e) {
	console.log('Error, something bad happened, message: ', e.message);
}

// console.log(calculateBmi(158, 51.5))