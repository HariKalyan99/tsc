const { createLogger, format, transports } = require("winston");

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.colorize(),
    format.timestamp(),
    format.printf(({ level, message, timestamp }) => {
      return `${timestamp} [${level}]: ${JSON.stringify(message)}`;
    }),
  ),
  transports: [new transports.Console()],
});

module.exports = logger;
