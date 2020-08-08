import express from 'express';
import routes from './routes';

const app = express();

app.use(routes);

app.listen(7000, () => {
  console.log('Server started on port 7000!');
});
