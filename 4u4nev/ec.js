function ABC() {
	let x = document.querySelector('#ABC');
	let selValue = x.value;
	let kom1 = document.querySelector('.kom1');
	let kom2 = document.querySelector('.kom2');
	let kom3 = document.querySelector('.kom3');
	let kom4 = document.querySelector('.kom4');
	let kom5 = document.querySelector('.kom5');
	let kom6 = document.querySelector('.kom6');
	switch (selValue) {
		case "komnata1":
			kom1.classList.remove('hidden');
			kom2.classList.add('hidden');
			kom3.classList.add('hidden');
			kom4.classList.add('hidden');
			kom5.classList.add('hidden');
			kom6.classList.add('hidden');
			break;
		case "komnata2":
			kom1.classList.add('hidden');
			kom2.classList.remove('hidden');
			kom3.classList.add('hidden');
			kom4.classList.add('hidden');
			kom5.classList.add('hidden');
			kom6.classList.add('hidden');
			break;
		case "komnata3":
			kom1.classList.add('hidden');
			kom2.classList.add('hidden');
			kom3.classList.remove('hidden');
			kom4.classList.add('hidden');
			kom5.classList.add('hidden');
			kom6.classList.add('hidden');
			break;
		case "komnata4":
			kom1.classList.add('hidden');
			kom2.classList.add('hidden');
			kom3.classList.add('hidden');
			kom4.classList.remove('hidden');
			kom5.classList.add('hidden');
			kom6.classList.add('hidden');
			break;
		case "komnata5":
			kom1.classList.add('hidden');
			kom2.classList.add('hidden');
			kom3.classList.add('hidden');
			kom4.classList.add('hidden');
			kom5.classList.remove('hidden');
			kom6.classList.add('hidden');
			break;
		case "komnata6":
			kom1.classList.add('hidden');
			kom2.classList.add('hidden');
			kom3.classList.add('hidden');
			kom4.classList.add('hidden');
			kom5.classList.add('hidden');
			kom6.classList.remove('hidden');
				break;
		case "def":
			kom1.classList.add('hidden');
			kom2.classList.add('hidden');
			kom3.classList.add('hidden');
			kom4.classList.add('hidden');
			kom5.classList.add('hidden');
			kom6.classList.add('hidden');
			break;

	}
}