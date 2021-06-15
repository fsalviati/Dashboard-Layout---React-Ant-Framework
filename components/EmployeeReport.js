import React from 'react';
import { Table, Button, Input } from 'antd';

const EmployeeReport = () => {
    const columns = [
        {
            title: 'NAME',
            dataIndex: 'name',
            width: 70,
        },
        {
            title: 'EMAIL',
            dataIndex: 'email',
            width: 70,
        },
        {
            title: 'DEPARTMENT',
            dataIndex: 'department',
            width: 50,
        },
        {
            title: 'START DATE',
            dataIndex: 'startDate',
            width: 50,
        },
        {
            title: 'END DATE',
            dataIndex: 'endDate',
            width: 50,
        },
        {
            title: 'EMPLOYEE TYPE',
            dataIndex: 'employeeType',
            width: 50,
        },
    ];

    const data = [];
    for (let i = 0; i < 25; i++) {
        data.push({
            key: i,
            name: `Fernando Salviati ${i}`,
            email: 'email@reesby.com.au',
            department: 'DEVELOPMENT',
            startDate: '01/01/2021',
            endDate: '31/12/2021',
            employeeType: 'EMPLOYEE'
        });
    }
    return (
        <div>
            <div>
                <Input placeholder="Enter Name or Email" style={{ width: 220, marginBottom: 12, marginRight: 18 }} />
                <Button type="primary" style={{ borderRadius: 4, marginBottom: 12 }}>Search</Button>
            </div>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 20 }} scroll={{ x: 1000, y: 250 }} />
        </div>
    )
}
export default EmployeeReport;