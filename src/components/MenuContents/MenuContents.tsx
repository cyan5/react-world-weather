// MenuContents.tsx

import LanguageButton from "./LanguageButton/LanguageButton";
import { StyledMenuContents, StyledMenuWrapper } from "./MenuContentsStyle";

type MenuContentsType = {
  toggleMenuOpen: () => void
  operateMenuOpen: (event: React.MouseEvent) => void
  language: string
  setLanguage: React.Dispatch<React.SetStateAction<string>>
}

const MenuContents = ({ toggleMenuOpen, operateMenuOpen, language, setLanguage }: MenuContentsType) => {
  return(
    <StyledMenuWrapper onClick={operateMenuOpen}>
      <StyledMenuContents>
        <h2>Select Language</h2>
        <LanguageButton lang="en"/>
        <LanguageButton lang="ja"/>
        {language}
      </StyledMenuContents>
    </StyledMenuWrapper>
  );
};

export default MenuContents;
