import React, { useState, useCallback } from 'react';
import PageWrapper from '../components/PageWrapper';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import Papa from 'papaparse'

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

	const onDrop = useCallback((acceptedFiles) => {
		const uploadFile = acceptedFiles[0];
		if (uploadFile.name.endsWith('.csv')) {
			setFile(uploadFile);
			Papa.parse(uploadFile, {
				header: true,
				dynamicTyping: true,
				skipEmptyLines: true,
				complete: (result) => setFileData(result.data),
			})

		}
	}, []);

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		accept: '.csv',
	})


	return (
		<PageWrapper>
			<Dropzone {...getRootProps()}>
				<DropInput {...getInputProps} accept=".csv"/>
				{
					file ? (
						<p>{file.name}</p>
					) : (
						<p>Arraste e solte um arquivo csv para seleciona-lo.</p>
					)
				}
			</Dropzone>
			{
				fileData.length > 0 && ( <p>sucesso</p> )
			}
		</PageWrapper>
	);
}

export default UploadPage;
