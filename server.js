const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
  '.ico': 'image/x-icon',
};

http.createServer((req, res) => {
  // Extract clean path without query params or hash
  let cleanUrl = req.url.split('?')[0].split('#')[0];
  if (cleanUrl === '/') {
    cleanUrl = '/index.html';
  }

  let filePath = path.join(__dirname, cleanUrl);
  let ext = path.extname(filePath);

  // Support clean URLs: if no extension is present, assume it is .html
  if (!ext) {
    filePath += '.html';
    ext = '.html';
  }

  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    } else {
      // Security headers
      res.setHeader('Content-Security-Policy', "default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://*.google.com https://*.googleapis.com; script-src 'self' 'unsafe-inline'; frame-src 'self' https://*.google.com;");
      res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
      res.setHeader('X-Frame-Options', 'SAMEORIGIN');
      res.setHeader('X-Content-Type-Options', 'nosniff');
      res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
      
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
}).listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

