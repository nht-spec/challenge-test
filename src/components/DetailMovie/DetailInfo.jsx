import { List, Space, Tag, Typography } from 'antd';
import React from 'react';

function DetailInfo({ info }) {
	const { Text, Link, Title } = Typography;

	//  ==== Format number to currency ===
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});
	const convertbudget = formatter.format(info.budget);
	const convertrevenue = formatter.format(info.revenue);

	//Data for render detail info
	const data = [
		{
			id: 1,
			title: 'Budget',
			value: convertbudget,
		},

		{
			id: 2,
			title: 'Genres',
			value: info.genres,
		},
		{
			id: 3,
			title: 'Home page',
			value: info.homepage,
		},
		{
			id: 4,
			title: 'Popularity',
			value: info.popularity,
		},
		{
			id: 5,
			title: 'Revenue',
			value: convertrevenue,
		},
		{
			id: 6,
			title: 'Spoken Languages',
			value: info.spoken_languages,
		},
		{
			id: 7,
			title: 'Status',
			value: info.status,
		},
		{
			id: 8,
			title: 'Vote count',
			value: info.vote_count,
		},
	];

	return (
		<List
			itemLayout='horizontal'
			dataSource={data}
			renderItem={(item) => (
				<List.Item key={item.id}>
					{item.id === 2 && (
						<Space>
							<Title level={5}>{item.title}:</Title>

							<Space wrap>
								{item.value?.map((child, idx) => (
									<Tag key={idx} color='geekblue'>
										{child.name}
									</Tag>
								))}
							</Space>
						</Space>
					)}

					{item.id === 6 && (
						<Space>
							<Title level={5}>{item.title}:</Title>

							<Space wrap>
								{item.value?.map((child, idx) => (
									<Tag key={idx} color='geekblue'>
										{child.name}
									</Tag>
								))}
							</Space>
						</Space>
					)}

					{item.id !== 6 && item.id !== 2 && (
						<Space wrap>
							<Title level={5}>{item.title}:</Title>
							<Space wrap>
								{item.id === 3 && (
									<Link href={item.value} target='_blank'>
										{item.value}
									</Link>
								)}

								{item.id === 7 && <Tag color='red'>{item.value}</Tag>}

								{item.id !== 3 && item.id !== 7 && (
									<Text strong type='danger'>
										{item.value}
									</Text>
								)}
							</Space>
						</Space>
					)}
				</List.Item>
			)}
		/>
	);
}

export default DetailInfo;
