"use client";
import { DownloadOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";
import React, { useLayoutEffect, useRef } from "react";
import TuiImageEditor from "tui-image-editor";
import "tui-image-editor/dist/tui-image-editor.css";

// import Events from '@/utils/events';
import ToolModule from "@/components/ToolModule";
import locale from "./config/locale";
import theme from "./config/theme";
import { TOOLS_KEY_ENUM } from "@/types";
import { isRuningClient } from "@/utils";
import "./index.css";

type TImageFormat = "png" | "jpg" | "jpeg" | "webp";

const ImageEditor = () => {
  const imageEditor = useRef<any>(null);
  const imageEditorInstance = useRef<any>(null);

  const imageEditorInit = (
    element: React.MutableRefObject<any>,
    value: string
  ) => {
    return new TuiImageEditor(imageEditor.current, {
      includeUI: {
        loadImage: {
          path: value,
          name: "image",
        },
        theme: theme,
        locale: locale,
        uiSize: {
          height: "calc(100vh - 120px )",
          width: "100%",
        },
      },
      cssMaxWidth: 700,
      cssMaxHeight: 500,
    } as any);
  };

  const handleUploadImage = async () => {
    // const { fileValue } = await Events.getFileFromLocalPath({
    //   filters: [{ name: '图片文件', extensions: ['*.png', '*.jpg', '*.jpeg', '*.webp'] }],
    //   encoding: 'base64',
    // });
    // if (fileValue) {
    //   const base64Url = `data:image/png;base64,${fileValue}`;
    //   imageEditorInstance.current = imageEditorInit(imageEditor.current, base64Url);
    // }
  };

  // 下载
  const handleDownloadImage = async (format: TImageFormat) => {
    // const url = imageEditorInstance.current.toDataURL({ format });
    // await Events.saveBase64ImageToLocal({
    //   fileName: `未命名.${format}`,
    //   payload: url.replace(`data:image/${format};base64,`, ''),
    //   format,
    // });
  };

  useLayoutEffect(() => {
    if (isRuningClient()) {
      imageEditorInstance.current = imageEditorInit(imageEditor.current, '/logo.png');
    }
  }, []);

  return (
    <div className={"tools-image-editor"}>
      <div className={"tools-image-editor-actions"}>
        <Space>
          <Button icon={<UploadOutlined />} onClick={handleUploadImage}>
            上传图片
          </Button>
          <Dropdown
            trigger={["click"]}
            menu={{
              items: [
                {
                  label: "png",
                  key: "png",
                },
                {
                  label: "jpg",
                  key: "jpg",
                },

                {
                  label: "jpeg",
                  key: "jpeg",
                },
                {
                  label: "webp",
                  key: "webp",
                },
              ],
              // @ts-ignore
              onClick: ({ key }) => handleDownloadImage(key as TImageFormat),
            }}
          >
            <Button type="primary" icon={<DownloadOutlined />}>
              下载图片
            </Button>
          </Dropdown>
        </Space>
      </div>
      <div className={"tools-image-editor-empty"}></div>
      <div ref={imageEditor} />
    </div>
  );
};

export default ToolModule(ImageEditor, TOOLS_KEY_ENUM.ImageEditor);
