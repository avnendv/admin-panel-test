import { Post } from '@/models';
import axiosClient from './Base';

const URL = '/posts';

const PostApi = {
	list(): Promise<Post[]> {
		const url = URL;
		return axiosClient.get(url);
	},
};

export default PostApi;
