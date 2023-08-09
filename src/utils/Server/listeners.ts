import { type Server } from "http";
import { type AddressInfo } from "net";
import process from "process";

import { Services } from "@/services";

const { LogService } = Services;

export const onError = (bind: string, port: number) => {
  return (error: Error): void => {
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
};

export const onListening = (server: Server) => {
  return (): void => {
    const add: AddressInfo = server.address() as AddressInfo;
    LogService.sys.info(`服务启动了: ${add.address}:${add.port}...`);
  };
};
