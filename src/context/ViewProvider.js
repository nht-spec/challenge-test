import { createContext, useState } from 'react';

const ViewContext = createContext({});

export const ViewProvider = ({ children }) => {
	const [view, setView] = useState('');

	return (
		<ViewContext.Provider value={{ view, setView }}>
			{children}
		</ViewContext.Provider>
	);
};

export default ViewContext;
