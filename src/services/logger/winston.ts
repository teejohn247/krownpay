import winston, { format, Logger } from 'winston';

const { combine, timestamp, prettyPrint, colorize } = format;

/**
 * Winston logger instance for displaying logs on
 * the console.
 * @type {Logger}
 */
export const logger: Logger = winston.createLogger({
  level: 'debug',
  format: combine(timestamp(), prettyPrint(), colorize()),
  transports: [
    new winston.transports.Console({ format: winston.format.simple() })
  ]
});
