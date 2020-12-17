import styled, { css } from 'styled-components'
import checkIcon from '../../images/icon-check.svg'

export const Boton = styled.div`
	content: " ";	
	width: 20px;
	height: 20px;
	border-radius: 50%;
	display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  cursor: pointer;
	background: ${(props) => !props.status ? 'transparent' : props.theme.backgroundGradiente };
	border: 1px solid
    ${(props) => (props.status ? 'none' : props.theme.border)};
  left: ${({ left }) => left};

    ${({ status }) =>
    status &&
    css`
      &::after {
        content: '';
        width: 10px;
        height: 10px;
        z-index: 15;
        top: 4px;
        left: 5px;
        background: url(${checkIcon}) no-repeat center;
        background-size: 100%;
      }
    `}

`;