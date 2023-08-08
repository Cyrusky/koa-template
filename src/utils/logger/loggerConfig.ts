import log4js, { levels } from "log4js";
import path from "path";

const logPath = process.env.LOG_PATH ?? "./logs";

log4js.configure({
  appenders: {
    systemInfo: {
      type: "dateFile",
      filename: path.resolve(logPath, "system/systemInfo"),
      alwaysIncludePattern: true,
      pattern: "yyyy-MM-dd.log",
      encoding: "utf-8",
      maxLogSize: 1024 * 1024,
      backups: 3,
    },
    accessError: {
      type: "dateFile",
      filename: path.resolve(logPath, "access/accessError"),
      alwaysIncludePattern: true,
      pattern: "yyyy-MM-dd.log",
      encoding: "utf-8",
      maxLogSize: 1024 * 1024,
      backups: 3,
    },
    accessResponse: {
      type: "dateFile",
      filename: path.resolve(logPath, "access/accessResponse"),
      alwaysIncludePattern: true,
      pattern: "yyyy-MM-dd.log",
      encoding: "utf-8",
      maxLogSize: 1024 * 1024,
      backups: 3,
    },
    database: {
      type: "dateFile",
      filename: path.resolve(logPath, "database/database"),
      alwaysIncludePattern: true,
      pattern: "yyyy-MM-dd.log",
      encoding: "utf-8",
      maxLogSize: 1024 * 1024,
      backups: 3,
    },
    console: {
      type: "console",
    },
  },
  categories: {
    systemInfo: {
      appenders: ["systemInfo"],
      level: `${levels.ALL.levelStr}`,
    },
    accessError: {
      appenders: ["accessError"],
      level: `${levels.ERROR.levelStr}`,
    },
    accessResponse: {
      appenders: ["accessResponse"],
      level: `${levels.ALL.levelStr}`,
    },
    database: {
      appenders: ["database"],
      level: `${levels.ALL.levelStr}`,
    },
    default: {
      appenders: ["console"],
      level: `${levels.ALL.levelStr}`,
    },
  },
  pm2: true,
  pm2InstanceVar: "INSTANCE_ID",
});
