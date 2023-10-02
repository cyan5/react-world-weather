// MenuContents.tsx

import styled from "styled-components"
import MenuToggleButton from "./MenuToggleButton";

type MenuContentsType = {
  toggleMenuOpen: () => void
  operateMenuOpen: (event: React.MouseEvent) => void
}

const MenuContents = ({ toggleMenuOpen, operateMenuOpen }: MenuContentsType) => {
  return(
    <StyledMenuWrapper onClick={operateMenuOpen}>
      <StyledMenuContents>
        <MenuToggleButton buttonStyle="×" toggleMenuOpen={toggleMenuOpen}/>
        <h2>React World Weather</h2>
        <p>usage ...</p>
      </StyledMenuContents>
    </StyledMenuWrapper>
  );
};

const StyledMenuWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(13px);
`

const StyledMenuContents = styled.div`
  width: 300px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 10px;
  transform: translate(-50%, -50%);
  box-shadow: 4px 4px 13px 5px rgba(0,0,0,0.25);
  border-radius: 15px;
  background: rgba(255,255,255,0.15);
  text-align: center;
`

export default MenuContents;
