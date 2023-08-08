import { type ConfigType } from "@/configs/configType";

export const devConfig: Partial<ConfigType> = {
  isDev: true,
  server: {
    bind: "0.0.0.0",
    port: 8000,
  },
};
