import styled from 'styled-components';


export const Footer = styled.div`
 	color: ${(props) => props.theme.text.third};
	padding: 20px 16px;
 	 background-color: ${(props) => props.theme.backgroundColorDiv};
	border-radius:  0 0 7px 7px ;
	display: flex;
	justify-content: space-between;
	font-size: 15px;
	
`;

export const Clear = styled.div`
	cursor: pointer;
`