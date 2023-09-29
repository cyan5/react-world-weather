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

const Result = (props: ResultPropsType) => {
  return(
    <div>
      {props.result.country && <StyledCountry>{props.result.country}</StyledCountry>}
      {props.result.cityName && <StyledCity>{props.result.cityName}</StyledCity>}
      {props.result.temperature && <StyledTemp>{props.result.temperature}<span>℃</span></StyledTemp>}
      {props.result.icon && <img src={props.result.icon} alt="icon"/>}
      {props.result.conditionText && <StyledCondition>{props.result.conditionText}</StyledCondition>}
    </div>
  );
};

export default Result;
