// Loading.tsx

import styled from "styled-components"

const Loading = () => {
  return(
    <StyledH3>Loading ...</StyledH3>
  );
};

const StyledH3 = styled.h3`
  color: transparent;
  border: 4px solid #f15186;
  border-top: 4px solid #ffffff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: auto;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

export default Loading;
