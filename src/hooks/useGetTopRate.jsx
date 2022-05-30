import { message } from 'antd';
import { useEffect, useState } from 'react';
import movieApi from '../api/movieApi';
import { API_KEY } from '../constants/api-keys';

function useGetTopRate(page, search) {
	const [loading, setLoading] = useState(false);
	const [topRateList, setTopRateList] = useState([]);

	useEffect(() => {
		{
			!search &&
				(async () => {
					setLoading(true);
					try {
						const result = await movieApi.getTopGate(page);
						setTopRateList(result.data);
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
						setTopRateList(result.data);
					} catch (err) {
						message.error(`${err}`);
					}

					setLoading(false);
				})();
		}
	}, [page, search]);

	return {
		loading,
		topRateList,
	};
}

export default useGetTopRate;
