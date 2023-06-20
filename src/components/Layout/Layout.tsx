import { Layout } from 'antd';
import { Main, Sider } from '.';

const LayoutCustom: React.FC = () => {
	return (
		<Layout hasSider>
			<Sider />
			<Main />
		</Layout>
	);
};

export default LayoutCustom;
