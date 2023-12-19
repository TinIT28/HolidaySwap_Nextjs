import React from 'react';
import { DatePicker, Space, theme } from 'antd';
import type { Dayjs } from 'dayjs';
import type { CellRenderInfo } from 'rc-picker/es/interface';

const EditPublicTime: React.FC = () => {
  const { token } = theme.useToken();
  const style: React.CSSProperties = {
    border: `1px solid ${token.colorPrimary}`,
    borderRadius: '50%',
  };
  const cellRender = React.useCallback((current: number | Dayjs, info: CellRenderInfo<Dayjs>) => {
    if (info.type !== 'date') {
      return info.originNode;
    }
    if (typeof current === 'number') {
      return <div className="ant-picker-cell-inner">{current}</div>;
    }
    return (
      <div className="ant-picker-cell-inner" style={current.date() === 1 ? style : {}}>
        {current.date()}
      </div>
    );
  }, []);
  return (
    <Space size={12} direction="vertical">
      <DatePicker.RangePicker cellRender={cellRender} className="py-3" />
    </Space>
  );
};

export default EditPublicTime;
