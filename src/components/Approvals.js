import React from 'react';
import { Table, Button } from 'antd';



const Approvals = () => {
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
            dataIndex: '',
            key: 'x',
            width: 30,

            render: () => <Button type="primary" className='button-approve-approval-component' style={{ border: 'none', borderRadius: 4 }}>Approve</Button>,
        },
        {
            dataIndex: '',
            key: 'x',
            width: 50,

            render: () => <Button type="primary" danger style={{ borderRadius: 4 }}>Reject</Button>,
        }
    ];

    const data = [];
    for (let i = 0; i < 25; i++) {
        data.push({
            key: i,
            name: `Fernando Salviati ${i}`,
            email: 'email@reesby.com.au',
            department: 'DEVELOPMENT',
        });
    }
    return (
        <div>
            <h1 style={{ fontSize: '22px' }}> Account Approvals</h1>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 20 }} scroll={{ x: 1000, y: 250 }} />

        </div>
    )
}
export default Approvals;