import { GlobConfig, GlobEnvConfig } from "@/types/config";
import { getShortName } from "../../../builder/getShortName";
import { getGlobEnvConfig, isDevMode } from "@/utils/env";

const ENV_NAME = getShortName(import.meta.env)
const ENV = ((isDevMode() ? getGlobEnvConfig() : window[ENV_NAME as any]) as unknown) as GlobEnvConfig

const {
  VITE_GLOB_APP_TITLE,
  VITE_GLOB_API_URL,
  VITE_GLOB_APP_SHORT_NAME,
  VITE_GLOB_API_URL_PREFIX,
  VITE_GLOB_UPLOAD_URL,
} = ENV

export const useGlobSetting = (): Readonly<GlobConfig> => {
  // Take global configuration
  const glob: Readonly<GlobConfig> = {
    title: VITE_GLOB_APP_TITLE,
    apiUrl: VITE_GLOB_API_URL,
    shortName: VITE_GLOB_APP_SHORT_NAME,
    urlPrefix: VITE_GLOB_API_URL_PREFIX,
    uploadUrl: VITE_GLOB_UPLOAD_URL,
  };
  return glob as Readonly<GlobConfig>;
};