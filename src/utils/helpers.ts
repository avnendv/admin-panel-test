import { routeMapping } from '@/routes';

export const generateRandomData = (length: number, max: number) => {
	return Array.from({ length }, () => Math.floor(Math.random() * max));
};

export const isValidColor = (color: string) => {
	const colorRegex = /^#([0-9A-Fa-f]{3}){1,2}$/i;
	return colorRegex.test(color);
};

export const selectedKey = () => {
	const pathCheck = '/' + window.location.pathname.split('/')[1];
	const indexPath = routeMapping.map((item) => item.path).indexOf(pathCheck);
	if (indexPath === -1) return ['1'];
	return [indexPath + 1 + ''];
};
