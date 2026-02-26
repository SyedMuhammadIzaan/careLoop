import { useState } from 'react'
import { Upload } from 'antd'
import { DeleteOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { beforeUpload, getBase64 } from '../../handlers/uploadImageHandler'
import type { RcFile } from 'antd/es/upload';
const MyProfile = () => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();

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

    const uploadButton = (
        <div className="flex flex-col items-center justify-center">
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div className="mt-2">Upload</div>
        </div>
    );

    return (
        <div className='profile-container border-2 border-gray-300 rounded-lg p-4 w-full h-full'>
            <div className='profile-content border-2 border-green-500'>
                <div className="profile-image-wrapper">
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        showUploadList={false} // ⭐ IMPORTANT
                        // action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                        beforeUpload={beforeUpload}
                        onChange={handleChange}
                        maxCount={1} // prevents multiple images
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
                </div>

                <div className="info-wrapper">
                    {/* profile info here */}
                </div>
            </div>
        </div>
    )
}

export default MyProfile