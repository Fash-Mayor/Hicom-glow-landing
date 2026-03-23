const https = require('https');

const data = JSON.stringify({
  host: "hicom-glow-landing.vercel.app",
  key: "7af881aea42d4ed893b8ff6b535b6b9c",
  keyLocation: "https://hicom-glow-landing.vercel.app/7af881aea42d4ed893b8ff6b535b6b9c.txt",
  urlList: [
    "https://www.hicomglow.com", // Main page
    "https://www.hicomglow.com" // Add other pages here
  ]
});

const options = {
  hostname: 'api.indexnow.org',
  path: '/IndexNow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': data.length
  }
};

const req = https.request(options, (res) => {
  console.log(`IndexNow Status: ${res.statusCode}`);
});

req.on('error', (error) => {
  console.error(error);
});

req.write(data);
req.end();