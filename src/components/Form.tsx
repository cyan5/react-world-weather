// Form.tsx

import { StyledButton, StyledInput } from "./FormStyle"

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

export default Form;
