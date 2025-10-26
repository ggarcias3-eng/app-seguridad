const express = require('express');
const app = express();
app.get('/', (_req, res) => res.json({ ok: true, msg: 'Hello CI/CD + Seguridad' }));
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`APP LISTENING :${port}`));
