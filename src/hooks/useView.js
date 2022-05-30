import { useEffect, useState } from 'react';

const VIEW_MODE = 'list-mode';

const getViewMode = () => JSON.parse(localStorage.getItem(VIEW_MODE)) || false;

export const useView = () => {
	const [viewMode, setViewMode] = useState(getViewMode);

	useEffect(() => {
		const initialValue = getViewMode();
		if (initialValue !== viewMode) {
			localStorage.setItem(VIEW_MODE, viewMode);
			// window.location.reload();
		}
	}, [viewMode]);

	return [viewMode, setViewMode];
};
