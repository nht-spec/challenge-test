import { Pagination } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useGetGenre from '../../hooks/useGetGenre';
import useGetListCurrentlyPlaying from '../../hooks/useGetListCurrentlyPlaying';
import useGetView from '../../hooks/useGetView';
import useSearch from '../../hooks/useSearch';
import GridView from '../shared/GridView';
import ListView from '../shared/ListView';
import LoadingGridView from '../shared/LoadingGridView';
import LoadingListView from '../shared/LoadingListView';

function CurrentlyPlayingInfo({ width }) {
	const [current, setCurrent] = useState(1);
	const [test, setTest] = useState([]);
	const navigate = useNavigate();

	//Get current of view mode
	const { view } = useGetView();

	//Get search key word for call api search
	const { search } = useSearch();

	//Call api currently playing
	const { loading, currentPlayingList, currentPlayingListResults } =
		useGetListCurrentlyPlaying(current, search);
	const { genreList } = useGetGenre();

	// render loading skeleton
	if (loading && !view) {
		return <LoadingListView width={width} />;
	}
	if (loading && view) {
		return <LoadingGridView />;
	}

	//Change current pagination
	const onChange = (page) => {
		setCurrent(page);
		window.scrollTo(0, 0);
	};

	//Navigate to detail page
	const onClick = (item) => {
		navigate(`/now-playing/${item}`);
	};

	// const imgurl = API_KEY.IMAGE_URL;

	return (
		<>
			<Pagination
				className='pagination-currently-list-top'
				responsive={true}
				showSizeChanger={false}
				current={current}
				onChange={onChange}
				total={currentPlayingList?.total_pages}
			/>

			{!view ? (
				<ListView
					genreList={genreList}
					onClick={onClick}
					current={currentPlayingList.results}
				/>
			) : (
				<GridView
					onClick={onClick}
					width={width}
					current={currentPlayingList.results}
				/>
			)}

			<Pagination
				className='pagination-currently-list-bottom'
				responsive={true}
				showSizeChanger={false}
				current={current}
				onChange={onChange}
				total={currentPlayingList?.total_pages}
			/>
		</>
	);
}

export default CurrentlyPlayingInfo;
