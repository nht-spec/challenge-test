import { Input } from 'antd';
import React from 'react';
import useSearch from '../../hooks/useSearch';

function SearchHeader(props) {
	const { Search } = Input;
	const { setSearch } = useSearch();

	const onSearch = (input) => {
		setSearch(input);
	};

	return <Search placeholder='Search movie' allowClear onSearch={onSearch} />;
}

export default SearchHeader;
