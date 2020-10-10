import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { StateProvider } from './store/StateProvider';
import appInitialState from './constants/appInitialState';
import { appReducer } from './store/appReducer';

ReactDOM.render(
	<React.StrictMode>
		<StateProvider initialState={appInitialState} reducer={appReducer}>
			<App></App>
		</StateProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
