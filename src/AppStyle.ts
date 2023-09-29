import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; 
  background: url("src/background-image.jpg") center center no-repeat;
  background-size: cover;
`

export const StyledContainer = styled.div`
  width: 50vw;
  text-align: center;
  padding: 20px 20px;
  border-radius: 15px;
  backdrop-filter: blur(20px);
  box-shadow: 4px 4px 13px 5px rgba(0,0,0,0.25);

  @media only screen and (max-width: 700px) {
    width: 80vw;
  }
`
