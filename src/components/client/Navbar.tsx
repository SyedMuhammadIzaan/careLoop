// import React from 'react'
import { ConfigProvider, Flex, Menu } from 'antd'
import { menuItems } from '../../constants/client/menuItem'
import CreateAccountBtn from './CreateAccountBtn'

const Navbar = () => {
    return (
        <div className='w-full border-2 border-green-500 p-2'>
            <Flex className='w-full' justify='space-evenly' align='center'>
                <div className="logo-container">
                    <h1 className='text-2xl font-bold text-blue-600'>MediCare</h1>
                </div>
                <ConfigProvider
                    theme={{
                        components: {
                            Menu: {
                                popupBg: '#fff',
                                horizontalItemSelectedColor: '#1677ff',
                                horizontalItemHoverColor: '#1677ff',
                            },
                            Typography: {
                                titleMarginBottom: 0,
                                titleMarginTop: 0,
                            },
                        },
                    }}
                >
                    <Menu mode='horizontal' items={menuItems} style={{
                        width:'auto'
                    }} />

                    <CreateAccountBtn />
                </ConfigProvider>
            </Flex>
        </div>
    )
}

export default Navbar