import { Flex, Menu, ConfigProvider, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { menuItems } from "../../constants/client/menuItem";
import CreateAccountBtn from "./CreateAccountBtn";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full border-2 border-green-500 px-4 py-2">

            <Flex justify="space-between" align="center">

                {/* Logo */}
                <div className="logo-container">
                    <h1 className="text-2xl font-bold text-blue-600">MediCare</h1>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    <ConfigProvider
                        theme={{
                            components: {
                                Menu: {
                                    popupBg: "#fff",
                                    horizontalItemSelectedColor: "#1677ff",
                                    horizontalItemHoverColor: "#1677ff",
                                },
                            },
                        }}
                    >
                        <Menu
                            mode="horizontal"
                            items={menuItems}
                            style={{ borderBottom: "none" }}
                        />
                    </ConfigProvider>

                    <CreateAccountBtn />
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-3">
                    <CreateAccountBtn />

                    <Button
                        type="text"
                        icon={<MenuOutlined />}
                        onClick={() => setOpen(true)}
                    />
                </div>
            </Flex>

            {/* Mobile Drawer Menu */}
            <Drawer
                title="Menu"
                placement="right"
                onClose={() => setOpen(false)}
                open={open}
            >
                <Menu mode="vertical" items={menuItems} />
            </Drawer>
        </div>
    );
};

export default Navbar;