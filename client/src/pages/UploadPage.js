import React, { useState, useCallback } from 'react';
import PageWrapper from '../components/PageWrapper';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';

const Dropzone = styled.div``;
const DropInput = styled.div``;


const UploadPage = () => {
	const [file, setFile] = useState(null);

	const onDrop = useCallback((acceptedFiles) => {
		const uploadFile = acceptedFiles[0];
		setFile(uploadFile);
	}, []);

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		accept: 'csv',
	})

	return (
		<PageWrapper>
			<p>Pagina upload</p>
			<Dropzone {...getRootProps()}>
				<DropInput {...getInputProps}/>
				<p>Arraste e solte um arquivo csv para seleciona-lo.</p>
			</Dropzone>
			{
				file && (<p>Arquivo selecionado</p>)
			}
		</PageWrapper>
	);
}

export default UploadPage;
