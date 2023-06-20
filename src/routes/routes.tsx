/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import { ROUTE_LINK } from '@/constants';

const Dashboard = lazy(() => import('@/pages/Dashboard/Dashboard'));
const Loading = lazy(() => import('@/pages/Loading'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const Posts = lazy(() => import('@/pages/Posts/Posts'));
const Settings = lazy(() => import('@/pages/Settings/Settings'));

export const routeMapping = [
	{
		path: ROUTE_LINK.DASHBOARD,
		component: <Dashboard />,
		name: 'Dashboard',
	},
	{
		path: ROUTE_LINK.POSTS_MANAGEMENT,
		component: <Posts />,
		name: 'Post Management',
	},
	{
		path: ROUTE_LINK.SETTINGS,
		component: <Settings />,
		name: 'Settings',
	},
];

export const routes = [
	{
		path: '/',
		component: <Loading />,
		name: 'Loading',
	},
	{
		path: ROUTE_LINK.DASHBOARD_PARAMS,
		component: <Dashboard />,
		name: 'Dashboard',
	},
	{
		path: ROUTE_LINK.NOT_FOUND,
		component: <NotFound />,
		name: 'Oh! Not Pages',
	},
	...routeMapping,
];
