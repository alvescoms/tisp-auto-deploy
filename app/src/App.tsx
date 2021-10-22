import React from 'react';
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import { ToastContainer } from 'react-toastify';
import Routes from './Routes';

import 'react-toastify/dist/ReactToastify.min.css';
import './app.css'

const App = () => {

  	return (
		<GeistProvider>
			<CssBaseline />
			<ToastContainer />
			<Routes />
    	</GeistProvider>
  	)

}

export default App;
