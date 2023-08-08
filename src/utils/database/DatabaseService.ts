import { Service } from "typedi";

import { ServicesNames } from "@/constants/services";

@Service(ServicesNames.DatabaseService)
export class DatabaseService {}
