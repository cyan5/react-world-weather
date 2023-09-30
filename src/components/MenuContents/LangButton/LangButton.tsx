// LangButton.tsx

import styled from "styled-components"

type LangButtonType = {
  lang: string
  langText: string
  setLang: React.Dispatch<React.SetStateAction<string>>
}

const LangButton = ({ lang, langText, setLang }: LangButtonType) => {
  return(
    <StyledDiv>
      {lang === langText ? <div id="checkbox" onClick={() => setLang(langText)}>●</div> : <div id="checkbox" onClick={() => setLang(langText)}>○</div>}
      <div id="langText">{langText}</div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: grid;
  grid-template-rows: 40px;
  grid-template-columns: 40px;
  
  #checkbox {
    grid-row: 1;
    grid-column: 1;
    /* margin-left: 8px; */
    padding-left: 8px;
    font-size: 24px;
    background: transparent;
    border: none;
    cursor: pointer;
  }
  
  #langText {
    grid-row: 1;
    grid-column: 2;
    margin-right: 40px;
    font-size: 20px;
  }
`

export default LangButton;
