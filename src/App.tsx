// import './App.css';

import Title from "./components/Title";
import Form from "./components/Form";
import Result from "./components/Result";
import { useState } from "react";
import { StyledTitle } from "./App"

type ResultStateType = {
  country: string
  cityName: string
  temperature: string
  conditionText: string
  icon: string
}

function App() {
  const [city, setCity] = useState<string>("")
  
  const [result, setResult] = useState<ResultStateType>({
    country: "", 
    cityName: "", 
    temperature: "", 
    conditionText: "", 
    icon: "", 
  })

  const getWeather = (event: any) => {
    event.preventDefault()
    fetch(`http://api.weatherapi.com/v1/current.json?key=b41c33ab7d784da98e710808232706&q=${city}&aqi=no`)
    .then(res => res.json())
    .then(data => setResult({
      country: data.location.country, 
      cityName: data.location.name, 
      temperature: data.current.temp_c, 
      conditionText: data.current.condition.text, 
      icon: data.current.condition.icon, 
    }))
  }

  return (
    <StyledTitle>
      <Title />
      <Form setCity={setCity} getWeather={getWeather}/>
      <Result result={result}/>
    </StyledTitle>
  );
}

export default App;
