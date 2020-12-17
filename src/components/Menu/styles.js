import styled from 'styled-components';


export const MenuStyled = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColorDiv};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;
  color: ${(props) => props.theme.text.third};
  font-size: 15px;
  padding: 0px 70px;


 
`;