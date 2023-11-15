window.onload = () => {
	const $btn = document.querySelector('#request');
	$btn.addEventListener('click', () => {
		fetch('http://172.20.99.222:3000/ok')
			.then((res) => res.json())
			.then(console.log);
	});
};
