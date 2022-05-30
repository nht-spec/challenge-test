import { message } from 'antd';
import { useEffect, useState } from 'react';
import movieApi from '../api/movieApi';

function useGetGenre() {
	const [loading, setLoading] = useState(false);
	const [genreList, setGenreList] = useState([]);

	useEffect(() => {
		{
			(async () => {
				setLoading(true);
				try {
					const result = await movieApi.getGenre();
					setGenreList(result.data);
				} catch (err) {
					message.error(`${err}`);
				}

				setLoading(false);
			})();
		}
	}, []);

	return {
		loading,
		genreList,
	};
}

export default useGetGenre;
