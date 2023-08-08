import { Services } from "@/services";

const { LogService } = Services;

export const generateEnvFile = () => {
  /**
   * Generate Env files
   */
  LogService.build.info("Start to generate env files ....");
};
