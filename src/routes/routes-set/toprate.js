import React from 'react';
import DetailMovieContainer from '../../containers/DetailMovie/DetailMovieContainer';
import TopRateContainer from '../../containers/TopRate/TopRateContainer';

export default [
	{
		path: '/top-rated',
		element: <TopRateContainer />,
	},

	{
		path: '/top-rated/:id',
		element: <DetailMovieContainer />,
	},
];
