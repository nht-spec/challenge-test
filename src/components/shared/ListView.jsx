import { Col, Row, Space, Tag, Typography } from 'antd';
import React from 'react';
import { API_KEY } from '../../constants/api-keys';
import LazyLoadImg from '../LazyLoad/LazyLoadImg';

function ListView({ current, genreList, onClick }) {
	const { Title, Text } = Typography;
	const imgurl = API_KEY.IMAGE_URL;

	function getDifference(genreCurrent, genreList) {
		let newArr = [];
		genreList?.filter((gen) => {
			genreCurrent?.filter((cur) => {
				if (cur === gen.id) {
					newArr.push(gen.name);
				}
			});
		});
		return newArr;
	}

	return (
		<Row gutter={[16, 16]}>
			{current?.map((item) => (
				<Col
					key={item.id}
					span={24}
					className='list-item'
					onClick={() => onClick(item.id)}
				>
					<Row key={item.id} gutter={[16, 16]}>
						<Col span={8} xs={24} sm={24} md={8} lg={8} xl={6}>
							{<LazyLoadImg url={imgurl + item.poster_path} />}
						</Col>
						<Col span={16} xs={24} sm={24} md={16} lg={16} xl={16}>
							<Row gutter={[16, 16]}>
								<Col span={24}>
									<Title>{item.title}</Title>
								</Col>

								<Col span={24}>
									<Space wrap>
										<Tag color='geekblue'>{item.release_date}</Tag>
										<Space wrap>
											{getDifference(item.genre_ids, genreList?.genres)?.map(
												(genre, idx) => (
													<Text strong type='danger' key={idx}>
														{genre}
													</Text>
												)
											)}
										</Space>
									</Space>
								</Col>

								<Col span={24}>
									<Space>
										<Text strong className='imdb-point'>
											IMDb
										</Text>
										<Text strong>{item.vote_average}/10</Text>
									</Space>
								</Col>
								<Col span={24}>
									<Text strong type='secondary'>
										{item.overview}
									</Text>
								</Col>
							</Row>
						</Col>
					</Row>
				</Col>
			))}
		</Row>
	);
}

export default ListView;
