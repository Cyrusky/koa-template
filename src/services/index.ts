import { Container } from "typedi";

import { ServicesNames } from "../constants/services";
import { type DatabaseService } from "../utils/database";
import { type LogService } from "../utils/logger";

export const Services = {
  DatabaseService: Container.get<DatabaseService>(
    ServicesNames.DatabaseService,
  ),
  LogService: Container.get<LogService>(ServicesNames.LogService),
};
