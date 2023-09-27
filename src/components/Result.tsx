// Result.tsx

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
      {props.result.country && <div>{props.result.country}</div>}
      {props.result.cityName && <div>{props.result.cityName}</div>}
      {props.result.temperature && <div>{props.result.temperature}<span>℃</span></div>}
      {props.result.icon && <img src={props.result.icon} alt="icon"/>}
      {props.result.conditionText && <div>{props.result.conditionText}</div>}
    </div>
  );
};

export default Result;
