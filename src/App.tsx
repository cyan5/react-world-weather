// App.tsx

import Title from "./components/Title";
import Form from "./components/Form";
import Result from "./components/Result";
import { useState } from "react";
import Loading from "./components/Loading";
import MenuContents from "./components/MenuContents";
import MenuToggleButton from "./components/MenuToggleButton";
import styled from "styled-components";
// image
import src_back from "./background-image.jpg"

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
    if (error === "TypeError"){
      alert("都市名が不適切です。")
    } else {
      alert(`${error}が発生しました。ページをリロードして、もう一度トライしてください。`)
    }
  }

  const getWeather = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    fetch(`http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${city}&aqi=no`)
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

  return (
    <StyledWrapper>
      <StyledContainer>
        <MenuToggleButton buttonStyle="≡" toggleMenuOpen={toggleMenuOpen}/>
        <Title />
        <Form city={city} setCity={setCity} getWeather={getWeather}/>
        {loading ? <Loading /> : <Result result={result}/>}
      </StyledContainer>
      {menuOpen && <MenuContents toggleMenuOpen={toggleMenuOpen} operateMenuOpen={operateMenuOpen} />}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; 
  background: url('${src_back}') center center no-repeat;
  background-size: cover;
`

const StyledContainer = styled.div`
  width: 50vw;
  text-align: center;
  padding: 20px 20px;
  border-radius: 15px;
  backdrop-filter: blur(20px);
  box-shadow: 4px 4px 13px 5px rgba(0,0,0,0.25);

  @media only screen and (max-width: 700px) {
    width: 80vw;
  }
`

export default App;
