import express from 'express';

const app = express();
const port = process.env['PORT'] || 3031;

app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});