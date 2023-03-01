const buyButtons = document.querySelectorAll('.buy-button');

buyButtons.forEach(button => {
	button.addEventListener('click', () => {
		alert('Thank you for your purchase!');
	});
});
