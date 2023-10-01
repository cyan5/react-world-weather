// Form.tsx

import styled from "styled-components"

type FormPropsType = {
  city: string
  setCity: React.Dispatch<React.SetStateAction<string>>
  getWeather: (event: React.FormEvent<HTMLFormElement>) => void
}

const Form = ({ city, setCity, getWeather }: FormPropsType) => {
  return(
    <div>
      <form onSubmit={getWeather}>
        <StyledInput 
          type="text" 
          name="city" 
          value={city}
          placeholder="City Name"
          onChange={event => setCity(event.target.value)}
        />
        <StyledButton type="submit">Get Weather</StyledButton>
      </form>
    </div>
  );
};

const StyledInput = styled.input`
  background-color: transparent;
  border: 0;
  border-bottom: solid 1px #f15186;
  width: 40%;
  padding-bottom: 4px;
  color: #fff !important;
  font-weight: lighter;
  letter-spacing: 2px;
  margin-bottom: 40px;
  margin-right: 20px;
  font-size: 20px;
`

const StyledButton = styled.button`
  width: 40%;
  border: 0;
  padding: 8px 20px;
  margin: 0 2px;
  border-radius: 2px;
  letter-spacing: 1px;
  font-size: 1.5rem;
  cursor: pointer;
  background-color: #f15186;
  color: #fff;
  
  &:hover {
    opacity: 0.8
  }
  
  &:focus {
    outline: none;
  }
`

export default Form;
