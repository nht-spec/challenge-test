import { message } from 'antd';
import { useEffect, useState } from 'react';
import movieApi from '../api/movieApi';
import useDetailMovieName from './useDetailMovieName';

function useGetDetailCurrentlyPlaying(id) {
	const [loading, setLoading] = useState(false);
	const [detailCurrentPlaying, setDetailCurrentPlaying] = useState([]);
	const { setMovieName } = useDetailMovieName();

	useEffect(() => {
		{
			id &&
				(async () => {
					setLoading(true);
					try {
						const result = await movieApi.getDetail(id);
						setDetailCurrentPlaying(result.data);
						setMovieName(result.data.title);
					} catch (err) {
						message.error(`${err}`);
					}

					setLoading(false);
				})();
		}
	}, [id]);

	return {
		loading,
		detailCurrentPlaying,
	};
}

export default useGetDetailCurrentlyPlaying;
