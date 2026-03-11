import React, { memo } from 'react'
import type { Doctor } from '../../interface/DoctorInterface';
import { Card } from 'antd';

interface CardProps {
    key?: string;
    data: Doctor;
}

const CardComp: React.FC<CardProps> = ({ data }) => {
    console.log("Data", data)
    return (
        <div className='border-2 border-green-500 px-6 py-10'>
            <Card
                hoverable
                style={{ width: 220 }}
                cover={
                    <img
                        draggable={false}
                        alt="example"
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                }
            >
                <p className='text-lg'>{data?.name}</p>
                <p className='text-base'>{data?.specialization}</p>
                <p className='text-green-500 flex items-center gap-2'><span className='font-bold text-2xl -mt-4'>.</span>{data?.status}</p>

            </Card>
        </div>
    )
}

export default memo(CardComp)