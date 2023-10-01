// Result.tsx

import styled from "styled-components"

type ResultPropsType = {
  result: {
    country: string
    cityName: string
    temperature: string
    conditionText: string
    icon: string
  }
}

const Result = ({ result }: ResultPropsType) => {
  const { country, cityName, temperature, icon, conditionText } = result;

  return(
    <div>
      {country && <StyledCountry>{country}</StyledCountry>}
      {cityName && <StyledCity>{cityName}</StyledCity>}
      {temperature && <StyledTemp>{temperature}<span>℃</span></StyledTemp>}
      {icon && <img src={icon} alt="icon"/>}
      {conditionText && <StyledCondition>{conditionText}</StyledCondition>}
    </div>
  );
};

const StyledCountry = styled.div`
  font-size: 2rem;
`

const StyledCity = styled.div`
  font-size: 4rem;
`

const StyledTemp = styled.div`
  font-size: 6rem;
  margin: 10px 0;
  color: #f15186;

  > span {
    font-size: 3rem;
    color: #333;
  }
`

const StyledCondition = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
`

export default Result;
