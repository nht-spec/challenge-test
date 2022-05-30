import { Card, List, Skeleton } from 'antd';
import React from 'react';

function LoadingListView({ width }) {
	// create empty array for list item skeleton
	const emptyArray = new Array(20).fill(null).map((_, index) => {
		const key = index + 1;
		return {
			key,
		};
	});

	//responsive
	if (width < 500) {
		return (
			<List
				dataSource={emptyArray}
				renderItem={() => (
					<List.Item>
						<Card
							style={{ width: '100%' }}
							cover={
								<img src={require('../../assets/images/loadingImage.png')} />
							}
						>
							<Skeleton active={true} paragraph={{ rows: 3 }} />
						</Card>
					</List.Item>
				)}
			/>
		);
	}

	return (
		<>
			{width > 500 && (
				<List
					style={{ paddingTop: '42px' }}
					dataSource={emptyArray}
					renderItem={() => (
						<List.Item>
							<Skeleton.Avatar
								className='skeleton-avatar'
								shape='square'
								active={true}
								size={width > 672 ? 250 : 150}
							/>
							<Skeleton active={true} paragraph={{ rows: 3 }} />
						</List.Item>
					)}
				/>
			)}
		</>
	);
}

export default LoadingListView;
