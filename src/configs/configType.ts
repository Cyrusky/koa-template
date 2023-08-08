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
    expiresInAmount: number;
    expiresInUnit: moment.unitOfTime.DurationConstructor;
    certificates: {
      dir: string;
      privateKeyName: string;
      publicKeyName: string;
    };
  };
}
