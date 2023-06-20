import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { generateRandomData } from '@/utils';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top' as const,
		},
		title: {
			display: true,
			text: 'Chart.js Line Chart',
		},
	},
};

const Subscription: React.FC = () => {
	// Dữ liệu mẫu cho biểu đồ Subscription
	const subscriptionChartData = {
		labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
		datasets: [
			{
				label: 'Subscription',
				data: generateRandomData(7, 300),
				backgroundColor: 'rgba(75,192,192,0.2)',
				borderColor: 'rgba(75,192,192,1)',
				borderWidth: 1,
			},
		],
	};
	return <Line options={options} data={subscriptionChartData} />;
};

export default Subscription;
