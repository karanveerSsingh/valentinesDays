import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || 10000;

const distPath = path.join(__dirname, 'dist/valentineDays');

// Serve static files from dist with caching
app.use(express.static(distPath, {
  maxAge: '1d',
  etag: false
}));

// SPA fallback: serve index.html for all routes
app.get('*', (req, res) => {
  res.setHeader('Cache-Control', 'no-cache');
  res.sendFile(path.join(distPath, 'index.html'), (err) => {
    if (err) {
      console.error('Error sending index.html:', err);
      res.status(404).send('Application index.html not found. Please ensure the app has been built.');
    }
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Serving files from ${distPath}`);
});
