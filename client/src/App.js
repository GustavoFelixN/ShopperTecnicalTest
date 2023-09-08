import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UploadPage from './pages/UploadPage';
import ResultPage from './pages/ResultPage';

const App = () => {

	const router = createBrowserRouter(
		[
			{ path: '/', element: <UploadPage /> },
			{ path: '/result', element: <ResultPage />},
		]
	);

	return (
		<RouterProvider router={router} />
	);
};

export default App;
