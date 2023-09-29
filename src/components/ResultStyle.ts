// ResultStyle.ts

import styled from "styled-components"

export const StyledCountry = styled.div`
  font-size: 2rem;
`

export const StyledCity = styled.div`
  font-size: 4rem;
`

export const StyledTemp = styled.div`
  font-size: 6rem;
  margin: 10px 0;
  color: #f15186;

  > span {
    font-size: 3rem;
    color: #333;
  }
`

export const StyledCondition = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
`
