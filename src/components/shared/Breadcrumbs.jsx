import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useDetailMovieName from '../../hooks/useDetailMovieName';

function Breadcrumbs({ children }) {
	//Get path name
	const location = useLocation();
	const pathname = location.pathname.split('/');

	//Get movie title of details
	const { movieName } = useDetailMovieName();

	return (
		<Breadcrumb
			style={{
				margin: '16px 0',
			}}
		>
			<Breadcrumb.Item>
				<HomeOutlined />
			</Breadcrumb.Item>
			{children.map(
				(child) =>
					child.key === pathname[1] && (
						<Breadcrumb.Item key={child.id}>
							<Link to={`/${pathname[1]}`}>{child.label}</Link>
						</Breadcrumb.Item>
					)
			)}

			{movieName && pathname.length > 2 && (
				<Breadcrumb.Item>{movieName}</Breadcrumb.Item>
			)}
		</Breadcrumb>
	);
}

export default Breadcrumbs;
