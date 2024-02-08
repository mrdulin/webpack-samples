const express = require('express');
const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');

const app = express();
app.use(express.json());

app.post('/api/create_link_token', (req, res) => {
	console.log(req.body);
	res.status(200).json({ code: 0 });
});

app.get('/ok', (req, res) => {
	res.sendStatus(200);
});

const serverOptions = {
	key: fs.readFileSync(path.resolve(__dirname, './ssl/key.pem')),
	cert: fs.readFileSync(path.resolve(__dirname, './ssl/cert.pem')),
};

const httpServer = http.createServer(app);
const httpsServer = https.createServer(serverOptions, app);

httpServer.listen(8080);
httpsServer.listen(8443);
