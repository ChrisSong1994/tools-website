import { useEffect } from "react";
import { Col, Row } from "antd";

import ToolCard from "@/components/ToolCard";
import { moduleConfig } from "@/components/ToolModule/config";
// import { useToolsModules } from '@/hooks';
import "@/tools";

export default function IndexPage() {
  // const ToolsModules = useToolsModules();
  return (
    <div className="tools-cards">
      <div className="tip"> 我的收藏</div>
      <Row gutter={[16, 16]}>
        {Object.values(moduleConfig).map((module) => {
          return (
            <Col key={module.key} xs={12} sm={12} md={8} lg={8} xl={6} xxl={4}>
              <ToolCard
                moduleKey={module.key}
                title={module.title}
                description={module.description}
                path={`/tools/${module.path}`}
                icon={module.icon}
              />
            </Col>
          );
        })}
      </Row>
      <div className="tip"> 其他工具</div>
    </div>
  );
}
