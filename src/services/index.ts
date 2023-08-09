/*************************************************
 * Copyright (c) 2023.
 * Author: Cyrusky <bo.jin@borgor.cn>
 *************************************************/
import { Container } from "typedi";

import { ServicesNames } from "@/constants/services";
import { type DatabaseService } from "@/database";
import { type LogService } from "@/utils/logger";

export const Services = {
  DatabaseService: Container.get<DatabaseService>(
    ServicesNames.DatabaseService,
  ),
  LogService: Container.get<LogService>(ServicesNames.LogService),
};
