// Title.tsx

import styled from "styled-components"

const Title = () => {
  return(
    <div>
      <StyledH1>
        React World Weather
      </StyledH1>
    </div>
  );
};

const StyledH1 = styled.h1`
  font-weight: 400;
  margin: 20px 0 50px;
`

export default Title;
