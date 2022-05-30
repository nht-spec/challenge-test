import { createContext, useState } from 'react';

const AuthContext = createContext({});

export const SearchProvider = ({ children }) => {
	const [search, setSearch] = useState('');

	return (
		<AuthContext.Provider value={{ search, setSearch }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
