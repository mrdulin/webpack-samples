const express = require('express');

const app = express();

app.get('/ok', (req, res) => {
	res.json({ data: 'ok' });
});

app.listen(4000, () => console.log('server is listening on port 4000'));
