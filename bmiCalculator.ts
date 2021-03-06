export const calculateBmi = (height: number, weight: number) => {

	try {
		if(isNaN(height) || isNaN(weight) || height < 10 || weight < 3) {
			throw new Error('malformatted parameters');
		}
		const bmi = weight/Math.pow(height/100, 2)
		let text = '';
		if(bmi < 15) {text = "Very severely underweight" }
		else if (bmi >=15 && bmi < 16) {text = "Severely underweight" }
		else if (bmi >=16 && bmi < 18.5) {text = "Underweight" }
		else if(bmi >=18.5 && bmi < 25) {text = "Normal (healthy weight)" }
		else if(bmi >=25 && bmi < 30) {text = "Overweight" }
		else if(bmi >=30 && bmi < 35) {text = "Obese Class I (Moderately obese)" }
		else if(bmi >=35 && bmi < 40) {text = "Obese Class II (Severely obese)" }
		else if(bmi >=40) {text = "Obese Class III (Very severely obese)" }
		return {
			weight,
			height,
			bmi: text
		}
	} catch (e) {
		return e.message;
	}

}