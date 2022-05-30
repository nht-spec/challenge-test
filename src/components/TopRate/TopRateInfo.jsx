import { Pagination } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useGetTopRate from '../../hooks/useGetTopRate';
import useGetView from '../../hooks/useGetView';
import useSearch from '../../hooks/useSearch';
import GridView from '../shared/GridView';
import ListView from '../shared/ListView';
import LoadingGridView from '../shared/LoadingGridView';
import LoadingListView from '../shared/LoadingListView';

function TopRateInfo({ width }) {
	const [current, setCurrent] = useState(1);
	const navigate = useNavigate();

	//Get current of view mode
	const { view } = useGetView();

	//Get search key word for call api search
	const { search } = useSearch();

	//Call api top rate
	const { loading, topRateList } = useGetTopRate(current, search);

	//render loading skeleton
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
		navigate(`/top-rated/${item}`);
	};

	return (
		<>
			<Pagination
				className='pagination-currently-list-top'
				responsive={true}
				showSizeChanger={false}
				current={current}
				onChange={onChange}
				total={topRateList?.total_pages}
			/>

			{!view ? (
				<ListView
					onClick={onClick}
					width={width}
					current={topRateList.results}
				/>
			) : (
				<GridView onClick={onClick} current={topRateList.results} />
			)}

			<Pagination
				className='pagination-currently-list-bottom'
				responsive={true}
				showSizeChanger={false}
				current={current}
				onChange={onChange}
				total={topRateList?.total_pages}
			/>
		</>
	);
}

export default TopRateInfo;
