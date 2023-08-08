import path from "path";

import { type ConfigType } from "@/configs/configType";

export const configs: ConfigType = {
  log: {
    path: path.resolve(process.cwd(), "logs"),
  },
  jwt: {
    certificates: {
      dir: path.resolve(process.cwd(), "certs"),
      privateKeyName: "private.key",
      publicKeyName: "public.key",
    },
    expiresInAmount: 1,
    expiresInUnit: "d",
    header: "X-Access-Token",
  },
  server: {
    bind: "127.0.0.1",
    port: 7999,
  },
};
