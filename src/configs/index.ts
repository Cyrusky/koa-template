/*************************************************
 * Copyright (c) 2023.
 * Author: Cyrusky <bo.jin@borgor.cn>
 *************************************************/
import { merge } from "lodash";

import { devConfig } from "@/configs/config.dev";
import { prodConfig } from "@/configs/config.prod";
import { configs } from "@/configs/configs";
import { type ConfigType } from "@/configs/configType";

export const customizedConfig =
  process.env.NODE_ENV === "production" ? prodConfig : devConfig;

export const config: ConfigType = merge(configs, customizedConfig);
