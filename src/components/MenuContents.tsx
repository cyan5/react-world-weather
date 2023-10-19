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
        <h2>アプリの使い方</h2>
        <ul>
          <li><span>GitHub公開版ではAPIキーを隠しているので、天気の取得はできません。</span></li>
          <li>都市名を入力し Get Weather ボタンをクリックすると、現在の天気が表示されます。</li>
          <li>都市名は英語で入力してください。</li>
          <li>存在しない都市名やスペルミスはエラーになります。</li>
        </ul>
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
  @media only screen and (max-width: 450px) {
    width: 80vw;
  }

  /* height: 200px; */
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 10px;
  transform: translate(-50%, -50%);
  box-shadow: 4px 4px 13px 5px rgba(0,0,0,0.25);
  border-radius: 15px;
  background: rgba(255,255,255,0.15);

  h2 {
    text-align: center;
  }

  ul {
    li {
      margin-right: 1em;
    }

    span {
      color: red;
    }
  }


`

export default MenuContents;
