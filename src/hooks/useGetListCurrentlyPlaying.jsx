import { message } from 'antd';
import { useEffect, useState } from 'react';
import movieApi from '../api/movieApi';
import { API_KEY } from '../constants/api-keys';

function useGetListCurrentlyPlaying(page, search) {
	const [loading, setLoading] = useState(false);
	const [currentPlayingList, setCurrentPlayingList] = useState([]);
	const [currentPlayingListResults, setCurrentPlayingListResults] =
		useState(null);

	useEffect(() => {
		{
			!search &&
				(async () => {
					setLoading(true);
					try {
						const result = await movieApi.getNowPlaying(page);
						setCurrentPlayingList(result.data);
						setCurrentPlayingListResults(result.data.results);
					} catch (err) {
						message.error(`${err}`);
					}

					setLoading(false);
				})();
		}

		{
			search &&
				(async () => {
					setLoading(true);
					try {
						const result = await movieApi.searchKeyWord(search, page);
						setCurrentPlayingList(result.data);
					} catch (err) {
						message.error(`${err}`);
					}

					setLoading(false);
				})();
		}
	}, [page, search]);

	return {
		loading,
		currentPlayingList,
		currentPlayingListResults,
	};
}

export default useGetListCurrentlyPlaying;
