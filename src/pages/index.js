import tango, { definePage } from "@mijadesign/tango-boot";
import { Section, Button } from "@mijadesign/tango-antd";
import { ProTable } from "@mijadesign/tango-pro";
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
      />
    </Section>
  );
};
export default definePage(App);
