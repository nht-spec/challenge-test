import ResizeObserver from 'rc-resize-observer';
import React, { useState } from 'react';
import CurrentlyPlayingInfo from '../../components/CurrentlyPlaying/CurrentlyPlayingInfo';

function CurrentlyPlayingContainer(props) {
	const [width, setWith] = useState(0);

	return (
		<ResizeObserver
			onResize={({ width }) => {
				setWith(width);
			}}
		>
			<div>
				<CurrentlyPlayingInfo width={width} />
			</div>
		</ResizeObserver>
	);
}

export default CurrentlyPlayingContainer;
