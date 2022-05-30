import { Avatar, Col, Row, Space, Tag, Typography } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../../constants/api-keys';
import useGetDetailCurrentlyPlaying from '../../hooks/useGetDetailCurrentlyPlaying';
import DetailInfo from '../DetailMovie/DetailInfo';
import DetailProduction from './DetailProduction';
import SkeletonLoading from './SkeletonLoading';

function DetailMovie({ width }) {
	const { Text, Title } = Typography;

	//get id of movie for call api
	const params = useParams();
	const { id } = params;

	// Call api get detail movie
	const { loading, detailCurrentPlaying } = useGetDetailCurrentlyPlaying(id);

	//get url img
	const imgUrl = API_KEY.IMAGE_URL;

	//format time
	const hour = Math.floor(detailCurrentPlaying.runtime / 60);
	const minutes = detailCurrentPlaying.runtime % 60;

	//Loading skeleton
	if (loading) {
		return <SkeletonLoading />;
	}

	return (
		<Row gutter={[40, 16]}>
			<Col span={10} xs={24} sm={24} md={8} lg={8} xl={8}>
				{detailCurrentPlaying.poster_path != null && (
					<img
						className='movie-poster'
						src={`${imgUrl}${detailCurrentPlaying.poster_path}`}
					/>
				)}
			</Col>

			<Col span={12} xs={24} sm={24} md={16} lg={16} xl={16}>
				<Row gutter={[16, 16]}>
					<Col span={24}>
						<Title level={width > 672 ? 2 : 3}>
							{detailCurrentPlaying.title}
						</Title>
					</Col>

					<Col span={24}>
						<Space wrap>
							<Tag color='geekblue'>{detailCurrentPlaying.release_date}</Tag>

							<Tag color='geekblue'>{`${hour}h ${minutes}m`}</Tag>
						</Space>
					</Col>

					<Col span={24}>
						<Space>
							<Text strong className='imdb-point'>
								IMDb
							</Text>
							<Text strong>{detailCurrentPlaying.vote_average}/10</Text>
						</Space>
					</Col>

					<Col>
						<Space direction='vertical'>
							<Title strong level={3}>
								Over view
							</Title>
							<Text>{detailCurrentPlaying.overview}/10</Text>
						</Space>
					</Col>

					<DetailProduction detailCurrentPlaying={detailCurrentPlaying} />

					<Col span={24}>
						<DetailInfo info={detailCurrentPlaying} />
					</Col>
				</Row>
			</Col>
		</Row>
	);
}

export default DetailMovie;
