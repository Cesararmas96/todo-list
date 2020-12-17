import styled from 'styled-components'

export const InputStyle = styled.input`
	width: 100%;
	border: none;
    padding: 16px;
    background-color: ${(props) => props.theme.backgroundColorDiv};
    border-radius: 5px;
    color: ${(props) => props.theme.text.primary};
 	
 `
