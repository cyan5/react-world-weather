// Title.tsx

import styled from "styled-components"

const Title = () => {
  return(
    <StyledTitle>
      <h1>React World Weather</h1>
    </StyledTitle>
  );
};

const StyledTitle = styled.div`
  h1 {
    font-weight: 400;
    margin: 20px 0 50px;
  }
`

export default Title;
