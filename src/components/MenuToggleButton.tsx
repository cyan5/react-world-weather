// MenuToggleButton.tsx

import styled from "styled-components"

type MenuButtonType = {
  buttonStyle: string
  toggleMenuOpen: () => void
}

const MenuToggleButton = ({ buttonStyle, toggleMenuOpen }: MenuButtonType) => {
  return(
    <StyledMenuToggleButton onClick={toggleMenuOpen}>
      <p>{buttonStyle}</p>
    </StyledMenuToggleButton>
  );
};

const StyledMenuToggleButton = styled.div`
  position: absolute;
  top: 0px;
  right: 65px;
  font-size: 20pt;
  color: #575757;
  background: transparent;
  border: 0px;
  
  p {
    position: absolute;
    top: 12px;
    left: 20px;
    margin: 0em;
    cursor: pointer;
  }
`

export default MenuToggleButton;
