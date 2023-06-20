import { useState } from 'react';
import { Table } from 'antd';
import { FolderViewOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table/interface';
import { Post } from '@/models';
import { PostDetail } from '.';

const PostsTable = ({ data }: { data: Post[] }) => {
	const [openShow, setOpenShow] = useState(false);
	const [detailItem, setDetailItem] = useState<Post | null>(null);

	const handleShow = (
		e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
		record: Post
	) => {
		e.stopPropagation();
		setOpenShow(true);
		setDetailItem(record);
	};

	//  Id, User ID, Title và Action
	const columns: ColumnsType<Post> = [
		{
			title: 'Id',
			dataIndex: 'id',
			key: 'id',
			sorter: (a, b) => a.id - b.id,
			ellipsis: true,
		},
		{
			title: 'User ID',
			dataIndex: 'userId',
			key: 'userId',
			ellipsis: true,
		},
		{
			title: 'Title',
			dataIndex: 'title',
			key: 'title',
			ellipsis: true,
		},
		{
			title: 'Action',
			key: 'action',
			ellipsis: true,
			render: (_, record, index) => (
				<FolderViewOutlined
					key={index}
					onClick={(e) => handleShow(e, record)}
				/>
			),
		},
	];

	return (
		<>
			<Table
				columns={columns}
				dataSource={data}
				rowKey="id"
				className="table-custom"
			/>
			{detailItem && (
				<PostDetail
					openShow={openShow}
					setOpenShow={setOpenShow}
					data={detailItem}
				/>
			)}
		</>
	);
};

export default PostsTable;
