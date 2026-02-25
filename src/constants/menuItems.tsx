import React from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuItem } from '../types/menu';

export const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
  };
};

export const sidebarMenuItems: MenuItem[] = [
  getItem('Dashboard', '1', <PieChartOutlined />),
  getItem('Patients', '2', <DesktopOutlined />),
  getItem('Attendance', '3', <UserOutlined />),
  getItem('Profile', '4', <FileOutlined />),
  getItem('Staff', '5', <FileOutlined />),
];
