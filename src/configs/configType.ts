/*************************************************
 * Copyright (c) 2023.
 * Author: Cyrusky <bo.jin@borgor.cn>
 *************************************************/
import type moment from "moment";

export interface ConfigType {
  isDev: boolean;
  router: {
    prefix: string;
  };
  server: {
    bind: string;
    port: number;
  };
  log: {
    path: string;
  };
  jwt: {
    header: string;
    expiresIn: number;
    expiresInUnit: moment.unitOfTime.DurationConstructor;
    secret: string;
    certificates: {
      dir: string;
      privateKeyName: string;
      publicKeyName: string;
    };
  };
}
