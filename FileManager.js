import React, { useState } from 'react';
import { Upload, message } from 'antd';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const { Dragger } = Upload;

// variable to record the uploaded files
const filesUploaded = [];

const FileManager = () => {
    const [isUploadOpen, setIsUploadOpen] = useState(false);

    const props = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info) {
            const { status } = info.file;

            if (status !== 'uploading') {
            }
            if (status === 'done') {
                //Feeding the array when file is Uploaded
                filesUploaded.push(info.file.name);
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },

    };

    //printing the variable
    console.log('filesUploaded =', filesUploaded);

    return (
        <div>
            <Button type="primary"
                shape="round"
                icon={<UploadOutlined />}
                style={{ marginBottom: "10px" }}
                onClick={() => { setIsUploadOpen(!isUploadOpen) }}>
                New file
            </Button>

            <div className='ant-drag-drop-container'>
                {isUploadOpen && (
                    <Dragger {...props}>
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
                )}
                <div>
                    {filesUploaded}
                </div>
            </div>
        </div >
    )
}

export default FileManager;