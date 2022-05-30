import React from 'react';
import CurrentlyPlayingContainer from '../../containers/CurrentlyPlaying/CurrentlyPlayingContainer';
import DetailMovieContainer from '../../containers/DetailMovie/DetailMovieContainer';

export default [
	{
		path: '/now-playing',
		element: <CurrentlyPlayingContainer />,
	},
	{
		path: '/now-playing/:id',
		element: <DetailMovieContainer />,
	},
];
