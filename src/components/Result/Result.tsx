// Result.tsx

import { StyledCity, StyledCondition, StyledCountry, StyledTemp } from "./ResultStyle"

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

export default Result;
