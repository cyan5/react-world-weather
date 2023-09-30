// App.tsx

import Title from "./components/Title";
import Form from "./components/Form/Form";
import Result from "./components/Result/Result";
import { useState } from "react";
import { StyledContainer, StyledWrapper } from "./AppStyle"
import Loading from "./components/Loading/Loading";
import MenuContents from "./components/MenuContents";
import MenuToggleButton from "./components/MenuToggleButton";
// import './App.css';

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

  const [loading, setLoading] = useState<boolean>(false)

  const errorMessage = (error: string) => {
    if (error == "TypeError"){
      alert("都市名が不適切です。")
    } else {
      alert(`${error}が発生しました。ページをリロードして、もう一度トライしてください。`)
    }
  }

  const getWeather = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    fetch(`http://api.weatherapi.com/v1/current.json?key=b41c33ab7d784da98e710808232706&q=${city}&aqi=no`)
    .then(res => res.json())
    .then(data => {
      setResult({
        country: data.location.country, 
        cityName: data.location.name, 
        temperature: data.current.temp_c, 
        conditionText: data.current.condition.text, 
        icon: data.current.condition.icon
      })
      setCity("")
      setLoading(false)
    })
    .catch(error => errorMessage(error.name))
  }

  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen)
  }

  const operateMenuOpen = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      toggleMenuOpen();
    }
  };

  const [lang, setLang] = useState<string>("en")

  return (
    <StyledWrapper>
      <StyledContainer>
        <MenuToggleButton buttonStyle="≡" toggleMenuOpen={toggleMenuOpen}/>
        <Title />
        <Form city={city} setCity={setCity} getWeather={getWeather}/>
        {loading ? <Loading /> : <Result result={result}/>}
      </StyledContainer>
      {menuOpen && <MenuContents toggleMenuOpen={toggleMenuOpen} operateMenuOpen={operateMenuOpen} lang={lang} setLang={setLang}/>}
    </StyledWrapper>
  );
}

export default App;
