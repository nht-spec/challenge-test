import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SearchHeader from '../components/shared/SearchHeader';
import MainLayout from '../Layout/MainLayout';

//Display
import nowplayingRoute from './routes-set/nowplaying';
import toprateRoute from './routes-set/toprate';

function MainRoutes() {
	//get path name, components from routes-set
	const publicRouteMovie = [...nowplayingRoute, ...toprateRoute];

	return (
		<Routes>
			<Route path='/' element={<Navigate to='/now-playing' replace />} />
			{publicRouteMovie.map((r, idx) => (
				<Route
					key={idx}
					path={r.path}
					element={
						<MainLayout children={r.element} searchHeader={<SearchHeader />} />
					}
				/>
			))}
			{/* 
			<Route path='*' element={<BlankLayout />} /> */}
		</Routes>
	);
}

export default MainRoutes;
