import React from 'react';
import { Table, Button, DatePicker, Select } from 'antd';

const { Option } = Select;

const AttendanceReport = () => {
    const columns = [
        {
            title: 'NAME',
            dataIndex: 'name',
            width: 50,
        },
        {
            title: 'EMAIL',
            dataIndex: 'email',
            width: 50,
        },
        {
            title: 'DEPARTMENT',
            dataIndex: 'department',
            width: 50,
        },
        {
            title: 'CLOCKING TIME',
            dataIndex: 'clockingTime',
            width: 50,
        },
        {
            title: 'CLOCKOUT TIME',
            dataIndex: 'clockoutTime',
            width: 50,
        },
        {
            title: 'WORK HOURS',
            dataIndex: 'workHours',
            width: 30,
        },
        {
            title: 'BREAK HOURS',
            dataIndex: 'breakHours',
            width: 30,
        },
        {
            title: 'STATUS',
            dataIndex: 'status',
            width: 30,
        },
    ];

    const data = [];
    for (let i = 0; i < 100; i++) {
        data.push({
            key: i,
            name: `Fernando Salviati ${i}`,
            email: 'email@reesby.com.au',
            department: 'DEVELOPMENT',
            clockingTime: '01/01/2021 09:00',
            clockoutTime: '31/12/2021 18:00',
            workHours: 8,
            breakHours: 1,
            status: 'Active'
        });
    }
    return (
        <div>
            <div>
                <label style={{ fontSize: 15, fontWeight: 'bold' }}>Date Range <DatePicker.RangePicker style={{ width: '60%', marginBottom: 12, marginLeft: 15 }} /></label>
                <Select placeholder="Select" style={{ width: 150, marginLeft: 18 }}>
                    <Option value="CRM">CRM</Option>
                    <Option value="HR">HR</Option>
                    <Option value="DATA SCIENCE">DATA SCIENCE</Option>
                </Select>
                <Button type="primary" style={{ marginLeft: 18, borderRadius: 4 }}>View</Button>
            </div>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
        </div >
    )
}
export default AttendanceReport;