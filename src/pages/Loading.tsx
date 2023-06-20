import { ROUTE_LINK } from '@/constants';
import { Navigate } from 'react-router-dom';

const Loading: React.FC = () => {
	return <Navigate to={ROUTE_LINK.DASHBOARD} />;
};

export default Loading;
