import styled from 'styled-components'

export const Task = styled.div`
	width: 100%;
    background-color: ${(props) => props.theme.backgroundColorDiv};
    border-bottom: 1px solid ${(props) => props.theme.border};
    padding: 19px;
    color: ${(props) => props.theme.text.primary};
    display: flex;
		align-items: center;
    justify-content: space-between;

    cursor: pointer;

	button{
		border: none;
		background: none;
	}

	p{
		margin-left: 10px;
		flex: 1;
	  width: 50%;
	  word-wrap: break-word;
	}

	img{
		width: 10px;
	}
`;

export const Radio = styled.input`
	background: red
`


export const Complete = styled.p`
	text-decoration: line-through;
  color: ${(props) => props.theme.text.third};
`;
