// Menu.tsx

import LanguageButton from "./LanguageButton";
import { StyledMenu } from "./MenuButtonStyle";

const Menu = () => {
  return(
    <StyledMenu>
      <p>≡</p>
      <div>
        <LanguageButton language="English"/>
        <LanguageButton language="Japanese"/>
      </div>
    </StyledMenu>
  );
};

export default Menu;
