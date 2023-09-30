// MenuContentsStyle.ts

import styled from "styled-components"

export const StyledMenuWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(13px);

  /* -webkit-transform: translate(-50%, -50%); */
  /* -ms-transform: translate(-50%, -50%); */
`

export const StyledMenuContents = styled.div`
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
  /* flex-direction: column; */

  h2 {
    /* opacity: 100%; */
  }
  
  ul {
    div {
      text-align: left;
    }

    button {

    }
  }
  /* button {
    size: 23px;
    width: 80%;
    height: 20%;
    background: gray;
    margin: 0;

    *:hover {
      opacity: 0.3;
    }
  } 
  */

`
