import { Card, Col, Row, Skeleton } from 'antd';
import React from 'react';

function LoadingGridView() {
	const emptyArray = new Array(20).fill(null).map((_, index) => {
		const key = index + 1;
		return {
			key,
		};
	});

	return (
		<Row gutter={[16, 16]}>
			{emptyArray.map((empty) => (
				<Col key={empty.key} span={6} xs={24} sm={12} md={12} lg={8} xl={6}>
					<Card
						style={{ width: '100%' }}
						cover={
							<img src={require('../../assets/images/loadingImage.png')} />
						}
					>
						<Skeleton active={true} paragraph={{ rows: 3 }} />
					</Card>
				</Col>
			))}
		</Row>
	);
}

export default LoadingGridView;
