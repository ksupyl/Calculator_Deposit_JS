function submitData(e) {
	e.preventDefault();
	const formData = new FormData(e.target);
	const formProps = Object.fromEntries(formData);
	const res = calculate(formProps.sum, formProps.day, formProps.percent, formProps.isCapital);
	document.querySelector('.result').innerHTML = `Your Income: ${res.toFixed(2)} Dollars`;
}

function calculate(sum, day, percent, isCapital) {
	if (isCapital === 'yes'){
		return sum * (1 + (percent / 100 / 365))**day - sum;
	} else{
		return sum * percent * day / 365 / 100;
	}
}