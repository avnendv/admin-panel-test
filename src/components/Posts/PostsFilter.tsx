import { Col, Input, Row } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

interface PostsFilterIF {
	setFilterValue: React.Dispatch<React.SetStateAction<string>>;
}

const PostsFilter = (props: PostsFilterIF) => {
	const { setFilterValue } = props;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFilterValue(event.target.value);
	};

	return (
		<>
			<Row>
				<Col offset={12} span={12}>
					<div className="search-content">
						<Input
							className="search-input"
							placeholder="Search User ID/ Title"
							prefix={<SearchOutlined className="search-icon" />}
							onChange={handleChange}
						/>
					</div>
				</Col>
			</Row>
		</>
	);
};

export default PostsFilter;
