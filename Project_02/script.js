const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	if (validateForm()) {
		sendFormData();
	}
});

function validateForm() {
	const name = document.querySelector('#name').value.trim();
	const email = document.querySelector('#email').value.trim();
	const phone = document.querySelector('#phone').value.trim();
	const address = document.querySelector('#address').value.trim();
	const motherboard = document.querySelector('#motherboard').value.trim();
	const processor = document.querySelector('#processor').value.trim();
	const ram = document.querySelector('#ram').value.trim();
	const storage = document.querySelector('#storage').value.trim();
	const graphics = document.querySelector('#graphics').value.trim();

	if (name === '' || email === '' || phone === '' || address === '' || motherboard === '' || processor === '' || ram === '' || storage === '' || graphics === '') {
		alert('Please fill in all fields.');
		return false;
	}

	if (!validateEmail(email)) {
		alert('Please enter a valid email address.');
		return false;
	}

	if (!validatePhone(phone)) {
		alert('Please enter a valid phone number.');
		return false;
	}

	return true;
}

function validateEmail(email) {
	const regex = /^\S+@\S+\.\S+$/;
	return regex.test(email);
}

function validatePhone(phone) {
	const regex = /^\d{10}$/;
	return regex.test(phone);
}

function sendFormData() {
	const xhr = new XMLHttpRequest();
	xhr.open('POST', 'server.php', true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			alert('Order placed successfully!');
			form.reset();
		}
	};
	const formData = new FormData(form);
	xhr.send(formData);
}
