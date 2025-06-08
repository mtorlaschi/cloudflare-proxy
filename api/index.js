const fetch = require('node-fetch');

module.exports = (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).send('Missing url parameter');

  fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
    }
  })
    .then(response => response.text())
    .then(data => {
      res.setHeader('Content-Type', 'text/html');
      res.status(200).send(data);
    })
    .catch(error => {
      console.error('Fetch error:', error);
      res.status(500).send('Error fetching URL: ' + error.message);
    });
};


