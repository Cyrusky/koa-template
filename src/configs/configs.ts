import path from "path";

import { type ConfigType } from "@/configs/configType";

export const configs: ConfigType = {
  isDev: true,
  log: {
    path: path.resolve(process.cwd(), "logs"),
  },
  jwt: {
    certificates: {
      dir: path.resolve(process.cwd(), "certs"),
      privateKeyName: "rsa_private_key.pem",
      publicKeyName: "rsa_public_key.pem",
    },
    secret: "ay+)6cYAZ&&HI)3ch$(ZtJ^TmHWrQE)hFi0JWsJh$8V^DIxYl_5Hj1gXbvPJV",
    expiresIn: 1,
    expiresInUnit: "d",
    header: "X-Auth-Token",
  },
  server: {
    bind: "127.0.0.1",
    port: 3000,
  },
};
