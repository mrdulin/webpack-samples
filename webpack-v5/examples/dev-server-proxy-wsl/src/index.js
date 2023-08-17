window.onload = () => {
	fetch('http://localhost:3000/proxy/todos/1')
		.then((res) => res.json())
		.then(console.log)
		.catch(console.error);
};
