// LanguageButton.tsx

import styled from "styled-components"

type LanguageButtonType = {
  lang: string;
}

const LanguageButton = ({ lang }: LanguageButtonType) => {
  return(
    <StyledDiv>
      <div id="checkBox">○</div>
      <div id="languageText">{lang}</div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: grid;
  grid-template-rows: 40px;
  grid-template-columns: 24px;

  #checkBox {
    grid-row: 1;
    grid-column: 1;
    margin-left: 8px;
    font-size: 24px;
  }
  
  #languageText {
    grid-row: 1;
    grid-column: 2;
    margin-right: 24px;
    font-size: 20px
  }
`

export default LanguageButton;
