import React from 'react';
import styled from 'styled-components';

const BaseButton = styled.button`
		background-color: #32de84;
		color: black;
		padding: 10px 20px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		margin-top: 20px;

`;

const Button = ({text, onClick}) => {
	return (
		<BaseButton onClick={onClick}>{text}</BaseButton>
	);
};

export default Button;
