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
  padding: 40px 20px;
  border-radius: 15px;
  backdrop-filter: blur(20px);
  box-shadow: 4px 4px 13px 5px rgba(0,0,0,0.25);

  @media only screen and (max-width: 700px) {
    width: 80vw;
  }
`

/* Loading.js */
// .loading {
//     border: 4px solid #f15186;
//     border-top: 4px solid #ffffff;
//     border-radius: 50%;
//     width: 40px;
//     height: 40px;
//     margin: auto;
//     animation: spin 2s linear infinite;
// }

// @keyframes spin {
//     0% { transform: rotate(0deg); }
//     100% { transform: rotate(360deg); }
// }
