import styled from 'styled-components';

export const ItemStyle = styled.div`
	cursor: pointer;
	color: ${(props) => props.active && 'hsl(220, 98%, 61%)'};
	&:hover{
		color: hsl(236, 33%, 92%);
	}
`