import React from "react";
import { definePage } from "@music163/tango-boot";
import { Section } from "@mijastudio/antd";
import { ProTable } from "@mijastudio/pro-components";
const App = () => {
  return (
    <Section tid="section0">
      <ProTable
        type="card"
        columns={[
          {
            title: "姓名",
            dataIndex: "name",
            key: "name",
            hideInSearch: false,
            valueType: "select",
          },
          {
            title: "年龄",
            dataIndex: "age",
            key: "age",
            hideInSearch: false,
            valueType: "dateRange",
          },
          {
            title: "住址",
            dataIndex: "address",
            key: "address",
            hideInSearch: false,
          },
        ]}
        toolBarOptions={false}
      />
    </Section>
  );
};
export default definePage(App);
