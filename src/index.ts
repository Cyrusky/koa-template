import "dotenv/config";
import "reflect-metadata";
import "@/services/register";

import { createServer } from "http";
import { type AddressInfo } from "net";
import * as process from "process";

import app from "@/app";
import { config } from "@/configs";
import { Services } from "@/services";

const { LogService } = Services;

const server = createServer(app.callback());

const port = Number.isNaN(Number(config.server.port))
  ? 3000
  : Number(config.server.port);
const bind = config.server.bind ?? "127.0.0.1";

const onError = (error: Error): void => {
  const listen = `${bind}:${port}`;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  switch (error.code) {
    case "EACCES":
      LogService.sys.error(`权限不足,需要提升权限:${listen}`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      LogService.sys.error(`端口已被占用：${listen}`);
      process.exit(1);
      break;
    default:
      LogService.sys.error("/bin/www文件截取未知错误", error);
  }
};

const onListening = (): void => {
  const add: AddressInfo = server.address() as AddressInfo;
  LogService.sys.info(`服务启动了: ${add.address}:${add.port}...`);
};

server.listen(port, bind, 1, () => {});
server.on("error", onError);
server.on("listening", onListening);
