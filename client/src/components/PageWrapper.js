import React from 'react';
import styled from 'styled-components';

const PageView = styled.div`
  width: 100%;
  height: 100vh;
  background-color: lightgray; 
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Title = styled.h1`
	padding: 40px;
`;

const ContentView = styled.div`
	border-radius: 20px;
	margin: 40px;
	background-color: white;
	display: flex;
	flex-direction: column;
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const PageWrapper = ({children}) => {

	return (
		<PageView>
			<Title>Titulo da pagina</Title>
			<ContentView>
				{children}
			</ContentView>
		</PageView>
	);
};

export default PageWrapper;
