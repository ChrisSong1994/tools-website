import { ImageCompress } from "@/tools";
import { moduleConfig } from "@/components/ToolModule/config";
import { TOOLS_KEY_ENUM } from "@/types";

const config = moduleConfig[TOOLS_KEY_ENUM.ImageCompress];

export const metadata = {
  title: config.title,
  description: config.description,
};

export default ImageCompress;