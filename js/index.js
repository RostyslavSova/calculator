let keys = document.querySelectorAll('input[type="button"]');
let operators = ['+', '-', '*', '/'];
 let decimalAdded = false;

for (let i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {

		let input = document.querySelector('.answer');
		let inputVal = input.value;
		let btnVal = this.value;

		if (btnVal == 'C') {
			input.value = '';
			decimalAdded = false;
		} else if (btnVal == '=') {
			let equation = inputVal;
			let lastChar = equation[equation.length - 1];
			if (operators.indexOf(lastChar) > -1 || lastChar == '.'){
				equation = equation.replace(/.$/, '');
			} 
			if (equation) {
				input.value = eval(equation);
			}

			decimalAdded = false;
		} else if (operators.indexOf(btnVal) > -1) {
			let lastChar = inputVal[inputVal.length - 1];
			if (inputVal !== '' && operators.indexOf(lastChar) === -1) {
				input.value += btnVal;
			} else if (inputVal == '' && btnVal == '-') {
				input.value += btnVal;
			}
			
			if (operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				input.value = inputVal.replace(/.$/, btnVal);
			}

			decimalAdded = false;
		} else if (btnVal == '.') {
			if (!decimalAdded) {
				input.value += btnVal;
				decimalAdded = true;
			}
		} else {
			input.value += btnVal;
		}

	
	}
}
