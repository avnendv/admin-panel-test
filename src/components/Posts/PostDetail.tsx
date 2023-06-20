import { Col, Modal, Row } from 'antd';
import { Post } from '@/models';

interface PropsInterface {
	openShow: boolean;
	setOpenShow: React.Dispatch<React.SetStateAction<boolean>>;
	data: Post;
}

const PostDetail = (props: PropsInterface) => {
	const { openShow, setOpenShow, data } = props;
	return (
		<>
			<Modal
				open={openShow}
				onOk={() => setOpenShow(false)}
				onCancel={() => setOpenShow(false)}
				title={data.title}
				footer={false}>
				<Row>
					<Col span={24}>User Id: {data.userId}</Col>
					<Col span={24}>Title: {data.title}</Col>
					<Col span={24}>
						<div>Body: </div>
						<div>{data.body}</div>
					</Col>
				</Row>
			</Modal>
		</>
	);
};

export default PostDetail;
