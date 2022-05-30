import { Avatar, Col, Row, Typography } from 'antd';
import React from 'react';
import { API_KEY } from '../../constants/api-keys';

function DetailProduction({ detailCurrentPlaying }) {
	const { Text, Title } = Typography;
	const imgUrl = API_KEY.IMAGE_URL;

	// render production countries in details
	const RenderProductionCountries = (product) => {
		return (
			<>
				{detailCurrentPlaying.production_countries?.map(
					(countries, idx) =>
						product.origin_country === countries.iso_3166_1 && (
							<Text key={idx}>{countries.name}</Text>
						)
				)}
			</>
		);
	};

	return (
		<Col span={24}>
			<Row gutter={[16, 16]}>
				<Col span={24}>
					<Title strong level={3}>
						Production companies
					</Title>
				</Col>
				{detailCurrentPlaying.production_companies?.map((product, idx) => (
					<Col
						key={idx}
						xs={24}
						sm={12}
						md={12}
						lg={12}
						xl={6}
						className='production-conpanies'
					>
						<Avatar
							className='avatar-production'
							size='large'
							src={`${imgUrl}${product.logo_path}`}
						/>

						<div className='production-conpanies'>
							<Text strong>{product.name}</Text>
							{RenderProductionCountries(product)}
						</div>
					</Col>
				))}
			</Row>
		</Col>
	);
}

export default DetailProduction;
