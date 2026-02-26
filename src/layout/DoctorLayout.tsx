import React from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import type { SidebarProps } from '../interface/SidebarProps';
import { sidebarMenuItems } from '../constants/menuItems';
import DoctorDashboard from '../features/doctor/DoctorDashboard';
import PatientDashboard from '../features/patient/PatientDashboard';
import MyProfile from '../features/profile/myProfile';
const { Header, Content, Sider } = Layout


const DoctorLayout: React.FC<SidebarProps> = ({ collapsed, onCollapse }) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <div className="demo-logo-vertical" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={sidebarMenuItems}
                    />
                </Sider>
                <Layout>
                    <Header style={{ padding: 0, background: colorBgContainer }}>
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => onCollapse(!collapsed)}

                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                    </Header>
                    <Content
                        className='border-2 border-solid border-black m-4 md:m-6 md:p-8 min-h-[280px] rounded-lg'
                        style={{ background: colorBgContainer, borderRadius: borderRadiusLG }}
                    >
                        <div className='w-full max-w-[1200px] mx-auto px-4 md:px-1 py-1'>
                            {/* <DoctorDashboard /> */}
                            {/* <PatientDashboard /> */}
                            <MyProfile />
                        </div>
                    </Content>

                </Layout>
            </Layout>
        </>
    )
}

export default DoctorLayout