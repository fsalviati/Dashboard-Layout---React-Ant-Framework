import React from 'react';
import { Table } from 'antd';

const FileManager = () => {
    const columns = [
        {
            title: 'FILENAME',
            dataIndex: 'filename',
            width: 70,
        },
        {
            title: 'LINK',
            dataIndex: 'link',
            width: 70,
        },
        {
            title: 'DOWNLOAD',
            dataIndex: 'download',
            width: 50,
        }
    ];
    const data = [];

    return (
        <div>
            <div className='buttons-container-file-manager'>
                <label style={{ fontSize: 15, fontWeight: 'bold' }}><button className='button-file-manager-component'>Choose File</button> No File Chosen</label>
                <button className='button-file-manager-component'>Upload</button>
            </div>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 20 }} scroll={{ x: 700, y: 250 }} />
        </div>
    )
}
export default FileManager;