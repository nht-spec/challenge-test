import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import 'antd/dist/antd.css';
import 'antd/dist/antd.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { SearchProvider } from './context/SearchProvider';
import { DetailProvider } from './context/DetailProvider';
import { ViewProvider } from './context/ViewProvider';

ReactDOM.render(
	<BrowserRouter>
		<SearchProvider>
			<DetailProvider>
				<ViewProvider>
					<React.StrictMode>
						<App />
					</React.StrictMode>
				</ViewProvider>
			</DetailProvider>
		</SearchProvider>
	</BrowserRouter>,

	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
