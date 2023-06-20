import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from '.';
import { Layout } from '@/components/Layout';

const ConfigRoute: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					{routes.map((route, index) => {
						return (
							<Route key={index} path={route.path} element={route.component} />
						);
					})}
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
export default ConfigRoute;
