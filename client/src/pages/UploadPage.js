import React, { useState, useCallback, useEffect } from 'react';
import PageWrapper from '../components/PageWrapper';
import { useDropzone } from 'react-dropzone';
import { useFilePicker } from 'use-file-picker';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Papa from 'papaparse'
import Button from '../components/Button';

const Dropzone = styled.div`
	height: 150px;
	border-radius: 30px;
	border: 2px dashed gray;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
	color: gray;
`;
const DropInput = styled.div``;


const UploadPage = () => {
	const [file, setFile] = useState(null);
	const [fileData, setFileData] = useState([]);
	const {plainFiles, openFilePicker} = useFilePicker({
		multiple: false,
		accept: '.csv'
	});
	const navigate = useNavigate();

	const onDrop = useCallback((acceptedFiles) => {
		const uploadFile = acceptedFiles[0];
		if (uploadFile.name.endsWith('.csv')) {
			setFile(uploadFile);
		}
	}, []);

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		accept: '.csv',
	});

	const navigateToNextPage = () => {
		navigate('/result', {state: {
			fileData
		}
		});
	};

	useEffect(() => {
		if (file) {
			Papa.parse(file, {
				header: true,
				dynamicTyping: true,
				skipEmptyLines: true,
				complete: (result) => setFileData(result.data),
			})
		}

	}, [file]);

	useEffect(() => {
		if (plainFiles.length) {
			setFile(plainFiles[0])
		}
	}, [plainFiles])

	useEffect(() => console.log(fileData), [fileData]);
	return (
		<PageWrapper>
			<Dropzone {...getRootProps()}>
				<DropInput {...getInputProps} accept=".csv"/>
				{
					file ? (
						<p>{file.name}</p>
					) : (
						<>
							<p>Arraste e solte um arquivo csv para seleciona-lo.</p>
							<p>Ou se preferir </p>
							<button onClick={openFilePicker}>Selecione o arquivo</button>
						</>
					)
				}
			</Dropzone>
			{

				fileData.length > 0 && (<Button text="Validar" onClick={navigateToNextPage} />)
			}
		</PageWrapper>
	);
}

export default UploadPage;
