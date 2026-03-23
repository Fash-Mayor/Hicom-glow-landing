import https from 'https';

const data = JSON.stringify({
  host: "hicom-glow-landing.vercel.app",
  key: "7af881aea42d4ed893b8ff6b535b6b9c",
  keyLocation: "https://hicomglow.com/7af881aea42d4ed893b8ff6b535b6b9c.txt",
  urlList: [
    "https://hicomglow.com/"
  ]
});

const options = {
  hostname: 'api.indexnow.org',
  path: '/IndexNow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(data) // Use Buffer for accurate length
  }
};

const req = https.request(options, (res) => {
  console.log(`IndexNow Status: ${res.statusCode}`);
});

req.on('error', (error) => {
  console.error('IndexNow Error:', error);
});

req.write(data);
req.end();