import { Rule } from 'antd/es/form';

export interface FormItemIF {
	label?: string;
	name?: string;
	rules?: Rule[];
	onChange: () => void;
}

export interface FormColorPickerIF extends FormItemIF {
	value: string;
	onChange: (value?: string) => void;
}
