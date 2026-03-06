import React, { useState } from 'react'
import { Upload } from 'antd';
import type { RcFile } from 'antd/es/upload';
import { DeleteOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { beforeUpload, getBase64 } from '../handlers/uploadImageHandler'
import type { UploadProp } from '../interface/UploadInterface';

const UploadComp:React.FC<UploadProp> = () => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    const handleChange = async (info: any) => {
            const file = info.file.originFileObj as RcFile
            if (!file) return
    
            setLoading(true)
            const base64 = await getBase64(file)
            setImageUrl(base64)
            setLoading(false)
        }
    
        const handleRemove = () => {
            setImageUrl(undefined);
        };
    return (
        <>
            <Upload
                name="avatar"
                listType="picture-card"
                showUploadList={false} // ⭐ IMPORTANT
                // action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                beforeUpload={beforeUpload}
                onChange={handleChange}
                maxCount={1} // prevents multiple images
                className='!w-full !h-full'
                style={{width:"100%",height:"100%"}}
            >
                {imageUrl ? (
                    <div className="relative w-full h-full">
                        <img
                            src={imageUrl}
                            alt="avatar"
                            className="w-full h-full object-cover rounded-lg"
                            draggable={false}
                        />
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleRemove();
                            }}
                            className="absolute top-1 right-1 bg-slate-300 text-white px-1 py-1 text-xs rounded"
                        >
                            <DeleteOutlined />
                        </button>
                    </div>
                ) : (
                    uploadButton
                )}
            </Upload>
        </>
    )
}

export default UploadComp