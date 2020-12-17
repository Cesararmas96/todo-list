import styled from 'styled-components'

export const Header = styled.div`
	display: flex;	
	background-color: ${(props) => props.theme.background} ;
	justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  	font-family: "JosefinSans-700";

	h1{
		color: #fff;
		letter-spacing: 10px;
	}

	img{
		cursor: pointer
	}
`;

