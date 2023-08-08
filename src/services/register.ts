import "reflect-metadata";
import "../utils/logger/LogService";
import "../utils/database/DatabaseService";

import { Container } from "typedi";

import { ServicesNames } from "../constants/services";
import { DatabaseService } from "../utils/database";
import { LogService } from "../utils/logger";

Container.set(ServicesNames.LogService, LogService);
Container.set(ServicesNames.DatabaseService, DatabaseService);
