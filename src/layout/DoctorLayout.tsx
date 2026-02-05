import React from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import type { SidebarProps } from '../interface/SidebarProps';
import { sidebarMenuItems } from '../constants/menuItems';
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
                        style={{
                            margin: '24px 16px',
                            border:'2px solid black',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}

export default DoctorLayout