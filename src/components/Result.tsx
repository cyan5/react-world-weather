// Result.tsx

// /* Results.js */
// .results-city {
//     font-size: 4rem;
// }

// .results-country {
//     font-size: 2rem;
// }

// .results-temp {
//     font-size: 6rem;
//     margin: 10px 0;
//     color: #f15186;
// }

// .results-temp > span {
//     font-size: 3rem;
//     color: #333;
// }

// .results-condition {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-size: 2.5rem;
// }

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
