import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { routeMapping } from '@/routes';
import { selectedKey } from '@/utils';
const { Sider } = Layout;

const SiderItem: React.FC = () => {
	const listMenu = routeMapping.map((item, index) => ({
		key: String(index + 1),
		label: <Link to={item.path}> {item.name}</Link>,
	}));
	return (
		<Sider className="sider-custom">
			<Menu
				theme="dark"
				mode="inline"
				defaultSelectedKeys={selectedKey()}
				items={listMenu}
			/>
		</Sider>
	);
};

export default SiderItem;
