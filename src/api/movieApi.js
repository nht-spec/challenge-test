import { API_KEY } from '../constants/api-keys';
import axiosApi from './axiosApi';

const apikey = API_KEY.KEY;

const movieApi = {
	getNowPlaying(page) {
		const url = `movie/now_playing?api_key=${apikey}&language=en-US&page=${page}`;
		return axiosApi.get(url);
	},

	getTopGate(page) {
		const url = `movie/top_rated?api_key=${apikey}&language=en-US&page=${page}`;
		return axiosApi.get(url);
	},

	getDetail(movieid) {
		const url = `/movie/${movieid}?api_key=${apikey}&language=en-US`;
		return axiosApi.get(url);
	},

	getGenre() {
		const url = `genre/movie/list?api_key=${apikey}&language=en-US`;
		return axiosApi.get(url);
	},

	searchKeyWord(keyword, page) {
		const url = `search/multi?api_key=${apikey}&language=en-US&query=${keyword}&page=${page}&include_adult=false`;
		return axiosApi.get(url);
	},
};

export default movieApi;
