import React, { useEffect, useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { useLocation } from 'react-router-dom';

const ResultPage = () => {
	const [data, setData] = useState([]);
	const location = useLocation();

	const validateData = (unverifiedData) => {
		console.log('Validando...', unverifiedData);
	};

	useEffect(() => {
		const recivedData = location.state.fileData;
		if (recivedData && recivedData.length) {
			setData(recivedData);
		}
	}, [location]);

	useEffect(() => {
		if (data.length) {
			validateData(data);
		}
	}, [data]);

	return (
		<PageWrapper>
			<p>Pagina resultado</p>
		</PageWrapper>
	);
}

export default ResultPage;
