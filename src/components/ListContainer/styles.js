import styled from 'styled-components';

export const ListConteinerStyle = styled.div`
	border-radius:  7px 7px 0 0;
	overflow-y: scroll;
    max-height: 300px;
    margin-top: 20px;

    ::-webkit-scrollbar {
	    width: 5px;
	    height: 5px;
	    
	}

	::-webkit-scrollbar-thumb {
	   background: ${(props) => props.theme.backgroundGradiente}
	}

	::-webkit-scrollbar-track {
 		background-color: ${(props) => props.theme.backgroundColorDiv};
	}
`;
