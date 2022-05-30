import { useContext } from 'react';
import ViewContext from '../context/ViewProvider';

const useGetView = () => {
	return useContext(ViewContext);
};

export default useGetView;
