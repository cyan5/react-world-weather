// MenuButton.tsx

import { StyledMenuButton } from "./MenuButtonStyle";

const MenuButton = (props: any) => {
  return(
    <StyledMenuButton onClick={props.toggleMenuOpen}>
      <p>≡</p>
    </StyledMenuButton>
  );
};

export default MenuButton;
