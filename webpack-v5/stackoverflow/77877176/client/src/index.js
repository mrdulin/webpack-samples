function main() {
	fetch('/api/create_link_token', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ idToken: 1 }),
	})
		.then((res) => res.json())
		.then((data) => console.log('data: ', data));
}

main();
