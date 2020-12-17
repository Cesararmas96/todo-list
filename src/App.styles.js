import styled from 'styled-components';

export const TodoConteiner = styled.div`
    margin-top: 47px;
    max-width: 330px;
    width: 100%;

    li{
    	list-style: none;
    }
	@media (min-width: 900px){
			max-width: 600px;
		}	
`;

export const Main = styled.div`
	display: flex;
	justify-content: center;
	background-image: url(${(props) => props.theme.backgroundImg.mobile});
	background-repeat: no-repeat;
	background-color: ${(props) => props.theme.backgroundColor};

	@media(min-width: 376px){
		min-height: 100vh;
		background-image: url(${(props) => props.theme.backgroundImg.desktop});
		background-size: 100% 207px;
	}

	@media (max-width: 374px){
		background-image: none;
		height: auto;
	}
`
export const TextFooter = styled.p`
 	color: ${(props) => props.theme.text.secundary};
 	text-align: center;
 	padding-bottom: 30px;
 	font-size: 15px;
 	margin:50px auto; 
`;