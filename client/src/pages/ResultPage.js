import React, { useEffect, useState, useCallback } from 'react';
import PageWrapper from '../components/PageWrapper';
import { useLocation } from 'react-router-dom';


const ResultPage = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const location = useLocation();

	//	const mountRequestValidationBody = (codes) => ({codes: codes})
	const mountRequestValidationOptions = useCallback((codes) => ({
		method: 'GET', 
		headers: {
			'Content-Type': 'application/json', 

		},
	}), []);

	const validateData = useCallback(async (unverifiedData) => {
		console.log('Validando...', unverifiedData);
		try {
			const codes = unverifiedData.map( item => item.product_code );
			const validationRequest = mountRequestValidationOptions(codes);
			let apiUrl = 'http://127.0.0.1:3333/validate';
			for(let i = 0; i < codes.length; i++) {
				if (apiUrl.indexOf('?') === -1) {

					apiUrl = `${apiUrl}?codes[]=${codes[i]}`
				} else {

					apiUrl = `${apiUrl}&codes[]=${codes[i]}`
				}
			}
			const result = await fetch(`${apiUrl}`, validationRequest);
			const data = await result.json();
			console.log(data);
		} catch(e) {
			console.error('Erro ao validar dados: ', e);
		} finally {
			setIsLoading(false);
		}
	}, [mountRequestValidationOptions]);

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
	}, [data, validateData]);

	return (
		<PageWrapper>
			{
				isLoading ? (
					<p>Validando dados...</p>
				) : (
					<p>Pagina resultado</p>
				)
			}
		</PageWrapper>
	);
}

export default ResultPage;
