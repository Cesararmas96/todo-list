import MenuItem from '../MenuItem';
import { MenuStyled } from './styles'

const Menu = ({ filter, changeFilterMenu }) => {
  return (
    <MenuStyled>
      <MenuItem
        text={'All'}
        value={'all'}
        filter={filter}
        changeFilterMenu={changeFilterMenu}
      />
      <MenuItem
        text={'Active'}
        value={'active'}
        filter={filter}
        changeFilterMenu={changeFilterMenu}


      />
      <MenuItem
        text={'Completed'}
        value={'completed'}
        filter={filter}
        changeFilterMenu={changeFilterMenu}
        

      />
    </MenuStyled>
  );
};

export default Menu;
