import { Col, Row, Skeleton } from 'antd';
import React from 'react';

function SkeletonLoading(props) {
	return (
		<Row gutter={[16, 16]}>
			<Col span={10} xs={24} sm={24} md={8} lg={8} xl={8}>
				<img
					src={require('../../assets/images/loadingImage.png')}
					width={'100%'}
				/>
			</Col>

			<Col span={12} xs={24} sm={24} md={16} lg={16} xl={16}>
				<Skeleton active paragraph={{ rows: 8 }} />
			</Col>
		</Row>
	);
}

export default SkeletonLoading;
