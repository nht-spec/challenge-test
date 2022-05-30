import { createContext, useState } from 'react';

const DetailContext = createContext({});

export const DetailProvider = ({ children }) => {
	const [movieName, setMovieName] = useState('');

	return (
		<DetailContext.Provider value={{ movieName, setMovieName }}>
			{children}
		</DetailContext.Provider>
	);
};

export default DetailContext;
