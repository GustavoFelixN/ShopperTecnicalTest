import React from 'react';


const PageWrapper = ({children}) => {

	return (
		<div>
			<h1>Titulo da pagina</h1>
			<div>
				{children}
			</div>
		</div>
	);
};

export default PageWrapper;
