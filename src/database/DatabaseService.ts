/*************************************************
 * Copyright (c) 2023.
 * Author: Cyrusky <bo.jin@borgor.cn>
 *************************************************/
import { Service } from "typedi";

import { ServicesNames } from "@/constants/services";
import { PrismaClient } from "@/database/client";

@Service(ServicesNames.DatabaseService)
export class DatabaseService extends PrismaClient {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }
}
