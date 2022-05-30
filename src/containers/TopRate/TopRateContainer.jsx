import ResizeObserver from 'rc-resize-observer';
import React, { useState } from 'react';
import TopRateInfo from '../../components/TopRate/TopRateInfo';

function TopRateContainer() {
	const [width, setWith] = useState(0);

	return (
		<ResizeObserver
			onResize={({ width }) => {
				setWith(width);
			}}
		>
			<div>
				<TopRateInfo width={width} />
			</div>
		</ResizeObserver>
	);
}

export default TopRateContainer;
