import React from 'react';
import { Table } from 'antd';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const FileManager = () => {
    const props = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info) {
            console.log('Info = ', info)
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);

        },

    };


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

            <div className='ant-drag-drop-container'>
                <Dragger {...props}
                >
                    <div className='drag-drop'>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                            Support for a single or bulk upload.
                        </p>
                    </div>
                </Dragger>
            </div>
            {/* <Table columns={columns} dataSource={data} pagination={{ pageSize: 20 }} scroll={{ x: 700, y: 250 }} /> */}
        </div>
    )
}
export default FileManager;