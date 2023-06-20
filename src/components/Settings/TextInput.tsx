import { Form, Input } from 'antd';
import { FormItemIF } from '@/models';

const TextInput = (props: FormItemIF) => {
	const { label, name, rules, onChange } = props;
	return (
		<Form.Item label={label} name={name} rules={rules}>
			<Input onChange={onChange} />
		</Form.Item>
	);
};

export default TextInput;
