'use client';
import React, { useState } from 'react';
import { Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useRouter } from 'next/navigation';

interface DataType {
  key: React.Key;
  name: string;
  size: number;
  type: string;
  amenity: string;
  action: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Size',
    dataIndex: 'size',
  },
  {
    title: 'Property type',
    dataIndex: 'type',
  },
  {
    title: 'Amenity',
    dataIndex: 'amenity',
    width: 300,
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render: (text: string, record: DataType) => (
      <a
        href={`/staff/staffdetailproperty?name=${record.name}`}
        style={{ color: 'blue', textDecoration: 'underline' }}
      >
        {text}
      </a>
    ),
  },
];

const data: DataType[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Property ${i}`,
    size: 32,
    type: `Property Luxury ${i}`,
    amenity: 'Microwave Oven, Bottled Water, Private Bathroom, Wi-Fi',
    action: 'View detail',
  });
}

const ListPropertyResort: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const start = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  const paginationConfig = {
    pageSize: 6,
  };

  return (
    <div>
      {/* Bỏ phần nút Reload và thông báo số lượng đã chọn */}
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={paginationConfig}
      />
    </div>
  );
};

export default ListPropertyResort;
