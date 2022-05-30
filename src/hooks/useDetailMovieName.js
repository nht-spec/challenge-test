import { useContext } from 'react';
import DetailContext from '../context/DetailProvider';

const useDetailMovieName = () => {
	return useContext(DetailContext);
};

export default useDetailMovieName;
