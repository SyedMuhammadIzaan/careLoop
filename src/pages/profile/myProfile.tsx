import { useState } from 'react'
import { Upload } from 'antd'
import { DeleteOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { beforeUpload, getBase64 } from '../../handlers/uploadImageHandler'
import type { RcFile } from 'antd/es/upload';
import { profileData } from '../../constants/profileData';
import type { Profile } from '../../interface/profileInterface';
const MyProfile = () => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();
    const [profile, setProfile] = useState<Profile[]>(profileData); // Assuming you want to display the first profile
    const [slots, setSlots] = useState<string[]>(['']);
    console.log("Selected Slots:",slots);

    const openModal=()=>{

    }
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
            <button className='bg-blue-500 text-white px-4 py-2 rounded-lg mb-4' onClick={()=>{openModal}}>Edit Profile</button>
            <div className='profile-content border-2 border-green-500 grid grid-cols-1 gap-4 md:grid-cols-2 w-full h-full'>
                <div className="profile-image-wrapper border-2 border-blue-500 flex items-center justify-center ">
                    <div className='w-48 h-48'>

                        <Upload
                            name="avatar"
                            listType="picture-card"
                            showUploadList={false} // ⭐ IMPORTANT
                            // action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                            maxCount={1} // prevents multiple images
                            className='w-full h-full'
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
                </div>

                <div className="info-wrapper border-2 border-slate-500">
                    {/* profile info here */}
                    {
                        profile ? (
                            profile.map((data) => (
                                <div key={data.id} className='p-4'>
                                    <h2 className='text-2xl font-bold mb-2'>{data.name}</h2>
                                    <p className='text-gray-600 mb-1'>{data.about}</p>
                                    <p className='text-gray-600 mb-1'><strong>Specialization:</strong> {data.specialization}</p>
                                    <p className='text-gray-600 mb-1'><strong>Qualification:</strong> {data.qualification.join(', ')}</p>
                                    <p className='text-gray-600 mb-1'><strong>Experience:</strong> {data.experience} years</p>
                                    <p className='text-gray-600 mb-1'><strong>Hospital:</strong> {data.hospital}</p>
                                    <p className='text-gray-600 mb-1'><strong>Location:</strong> {data.location}</p>
                                    <p className='text-gray-600 mb-1'><strong>Consultation Fee:</strong> ${data.consultationFee}</p>
                                    <p className='text-gray-600 mb-1'><strong>Rating:</strong> {data.rating} ({data.totalReviews} reviews)</p>
                                    <p className='text-gray-600 mb-1'><strong>Availability:</strong> {data.availableDays.join(', ')}</p>
                                    <p className='text-gray-600 mb-1'><strong>Availability Days:</strong>{
                                        data.availableSlots.map((slot) => (
                                            <button className='inline-block bg-green-200 text-green-800 px-2 py-1 rounded-full mr-2 mb-2' onClick={() => setSlots([slot])}>{slot}</button>
                                        ))}</p>
                                </div>
                            ))
                        ) : (
                            <p>No profile data available.</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default MyProfile