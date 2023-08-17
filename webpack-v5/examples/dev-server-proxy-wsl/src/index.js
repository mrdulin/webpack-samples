window.onload = () => {
  // not work
	fetch('http://local.company.com:3000/proxy/ok')
		.then((res) => res.json())
		.then(console.log)
		.catch(console.error);

	// works
	fetch('/proxy/ok')
		.then((res) => res.json())
		.then(console.log)
		.catch(console.error);

	// works
	fetch('http://localhost:3000/proxy/ok')
		.then((res) => res.json())
		.then(console.log)
		.catch(console.error);
};
