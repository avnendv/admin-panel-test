import { Form, DatePicker } from 'antd';
import { FormItemIF } from '@/models';

const DatePickerInput = (props: FormItemIF) => {
	const { label, name, rules } = props;
	return (
		<Form.Item label={label} name={name} rules={rules}>
			<DatePicker />
		</Form.Item>
	);
};

export default DatePickerInput;
