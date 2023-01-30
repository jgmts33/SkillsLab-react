const express = require('express');
const app = express();
const port = 3000;
const isLocal = true;

app.get('/', (req, res) => {
    res.json({
		message: "✨ 👋🌏 ✨",
		stage: process.env.NODE_ENV,
	});
});

app.get("/ping", (req, res) => {
	res.json({
		message: "🏓",
	});
});

if (isLocal) {
	app.listen(port, () => {
		console.log(`Example app listening on port ${port}`)
	});
} else {
	module.exports = app;
}
