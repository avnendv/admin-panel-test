import { useEffect, useState } from 'react';
import { useDebounce } from '@/hooks';
import { Post } from '@/models';
import PostApi from '@/api/Post';
import { PostsFilter, PostsTable } from '@/components/Posts';

const Posts: React.FC = () => {
	const [data, setData] = useState<Post[]>([]);
	const [filterValue, setFilterValue] = useState<string>('');
	const debouncedValue = useDebounce<string>(filterValue, 500);

	const getPostsData = () => {
		PostApi.list()
			.then((data) => data && setData(data))
			.catch(() => {
				// Handle error
				console.log('Error!!!');
			});
	};

	const handleFilterData = (filterValue = '') => {
		const filterValuePrefix = filterValue.trim().toLowerCase();
		if (!filterValuePrefix) return data;
		const dataList = data.filter(
			(item) =>
				item.userId === +filterValuePrefix ||
				item.title.includes(filterValuePrefix)
		);
		return dataList;
	};

	useEffect(() => {
		getPostsData();
	}, []);

	return (
		<>
			<PostsFilter setFilterValue={setFilterValue} />
			<PostsTable data={handleFilterData(debouncedValue)} />
		</>
	);
};

export default Posts;
