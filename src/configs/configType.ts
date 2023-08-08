import type moment from "moment";

export interface ConfigType {
  isDev: boolean;
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
