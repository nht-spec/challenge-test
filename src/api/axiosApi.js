import axios from 'axios';

const axiosApi = axios.create({
	baseURL:
		'https://the-ultimate-api-challenge.herokuapp.com/https://api.themoviedb.org/3',
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json',
	},
});

export default axiosApi;
