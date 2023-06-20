import React, { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Layout } from 'antd';
import { Footer } from '.';
import { Loading } from '../Spinner';
import { routeMapping } from '@/routes';

const { Content } = Layout;

const MainItem: React.FC = () => {
	const { pathname } = useLocation();

	const getTitle = () => {
		const pathCheck = '/' + pathname.split('/')[1];
		return routeMapping.filter((item) => pathCheck === item.path)[0]?.name;
	};
	return (
		<Layout className="site-layout" style={{ marginLeft: 200 }}>
			<Content className="content-main">
				<h2 style={{ marginBottom: '1rem' }}>{getTitle()}</h2>
				<Suspense fallback={<Loading />}>
					<Outlet />
				</Suspense>
			</Content>
			<Footer />
		</Layout>
	);
};

export default MainItem;
