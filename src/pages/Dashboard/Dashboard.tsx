import { useNavigate, useParams } from 'react-router-dom';
import { Button, Space } from 'antd';
import { Revenue, Subscription } from '@/components/Dashboard';

type TypeTab = 'subscription' | 'revenue';

const Dashboard: React.FC = () => {
	// Get the type param from the URL.
	const { type } = useParams();
	const navigate = useNavigate();

	const TabActive: React.FC = () => {
		if (!type) return <Subscription />;
		const tab = {
			subscription: <Subscription />,
			revenue: <Revenue />,
		};
		const typeToLower = type.toLowerCase();
		return tab[typeToLower as TypeTab] ?? <div>Tab không hợp lệ</div>;
	};

	const handleClick = (path: string) => {
		if (type && type.toLowerCase() === path) return;
		navigate(`/dashboard/${path}`);
	};

	return (
		<>
			<Space direction="vertical">
				<Space>
					<Button
						type="primary"
						ghost
						onClick={() => handleClick('subscription')}>
						Subscription
					</Button>
					<Button
						type="primary"
						className="secondary"
						ghost
						onClick={() => handleClick('revenue')}>
						Revenue
					</Button>
				</Space>
			</Space>
			<TabActive />
		</>
	);
};

export default Dashboard;
