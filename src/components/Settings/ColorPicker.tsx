import { useState } from 'react';
import { Form, Input } from 'antd';
import { FormColorPickerIF } from '@/models';

const ColorPicker = (props: FormColorPickerIF) => {
	const { label, value, onChange } = props;
	const [color, setColor] = useState(value || '#000');

	const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newColor = e.target.value;
		setColor(newColor);
		onChange(newColor);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newColor = e.target.value;
		onChange(newColor);
		setColor(newColor);
	};

	return (
		<Form.Item label={label}>
			<div className="color-wrapper">
				<Input
					type="color"
					className="color-input"
					value={color}
					onChange={handleColorChange}
				/>
				<Input
					value={color}
					className="color-text"
					onChange={handleInputChange}
				/>
			</div>
		</Form.Item>
	);
};

export default ColorPicker;
