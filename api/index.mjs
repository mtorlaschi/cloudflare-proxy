import fetch from 'node-fetch';

export default async function handler(req, res) {
  const url = req.query.url;
  if (!url) return res.status(400).send('Missing url parameter');
  
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
      }
    });
    const data = await response.text();
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(data);
  } catch (e) {
    console.error('Fetch error:', e);
    res.status(500).send('Error fetching URL: ' + e.message);
  }
}

