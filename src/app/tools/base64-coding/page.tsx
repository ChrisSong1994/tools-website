import { Base64Coding } from "@/tools";
import { moduleConfig } from "@/components/ToolModule/config";
import { TOOLS_KEY_ENUM } from "@/types";

const config = moduleConfig[TOOLS_KEY_ENUM.Base64Coding];

export const metadata = {
  title: config.title,
  description: config.description,
};

export default Base64Coding;
