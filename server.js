const express = require('express');
const { jsDeobfuscate } = require('./deobfuscators/jsDeobfuscator');
const app = express();

app.use(express.json());

app.post('/deobfuscate', (req, res) => {
  const { code, language } = req.body;
  let result;

  if (language === 'js') {
    result = jsDeobfuscate(code);
  }

  res.json({ deobfuscatedCode: result });
});

app.listen(3001, () => console.log('Server is running on http://localhost:3001'));
