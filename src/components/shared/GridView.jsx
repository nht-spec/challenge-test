import { Card, Col, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { API_KEY } from '../../constants/api-keys';
import LazyLoadImg from '../LazyLoad/LazyLoadImg';

function GridView({ current, onClick }) {
	const imgurl = API_KEY.IMAGE_URL;
	return (
		<Row gutter={[16, 16]}>
			{current?.map((item) => (
				<Col key={item.id} span={6} xs={24} sm={12} md={12} lg={8} xl={6}>
					<Card
						onClick={() => onClick(item.id)}
						hoverable
						cover={<LazyLoadImg url={imgurl + item.poster_path} />}
					>
						<Meta
							className='cart-meta-grid-layout'
							title={item.title}
							description={item.overview}
						/>
					</Card>
				</Col>
			))}
		</Row>
	);
}

export default GridView;
