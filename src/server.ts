import express from 'express';
import cors from 'cors';
import expressWinston from 'express-winston';
import winston from 'winston';
import { logger } from './services';
import { config } from './config';

const { port } = config;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  expressWinston.logger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.prettyPrint(),
      winston.format.simple()
    )
  })
);

app.get('/', (req, res) => {
  res.json({ msg: 'Hello KrownPay' }).status(200);
});

export const server = app.listen(port, () => {
  logger.info(`Server listening on port ${port}`);
});
