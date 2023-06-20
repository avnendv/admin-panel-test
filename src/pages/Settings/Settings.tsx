import { useState } from 'react';
import { Form, Button } from 'antd';
import { DatePickerInput, TextInput } from '@/components/Settings';
import ColorPicker from '@/components/Settings/ColorPicker';

const Settings: React.FC = () => {
	const [form] = Form.useForm();
	const [isDirty, setIsDirty] = useState(false); // Biến state để theo dõi sự thay đổi dữ liệu

	const handleSaveSettings = () => {
		form
			.validateFields()
			.then((values) => {
				console.log('Settings:', values);
				setIsDirty(false); // Đặt lại trạng thái dirty về false sau khi lưu thành công
			})
			.catch((errorInfo) => {
				console.log('Validation Failed:', errorInfo);
			});
	};

	const handleInputChange = () => {
		setIsDirty(true); // Đánh dấu là đã có sự thay đổi khi nhập liệu
	};

	return (
		<div>
			<Form
				layout="vertical"
				form={form}
				style={{ maxWidth: 400, marginLeft: 20 }}>
				<TextInput
					label="Title"
					name="title"
					rules={[{ required: true, message: 'Title is required' }]}
					onChange={handleInputChange}
				/>
				<TextInput
					label="Email"
					name="email"
					rules={[
						{ required: true, message: 'Email is required' },
						{ type: 'email', message: 'Please enter a valid email' },
					]}
					onChange={handleInputChange}
				/>
				<ColorPicker
					label="Background Color"
					name="backgroundColor"
					value={form.getFieldValue('backgroundColor')}
					onChange={(color?: string) => {
						form.setFieldsValue({ backgroundColor: color });
						setIsDirty(true);
					}}
				/>
				<DatePickerInput
					label="Active Date"
					name="activeDate"
					rules={[{ required: true, message: 'Active date is required' }]}
					onChange={handleInputChange}
				/>
				{isDirty && (
					<Button type="primary" onClick={handleSaveSettings}>
						Save
					</Button>
				)}
			</Form>
		</div>
	);
};

export default Settings;
