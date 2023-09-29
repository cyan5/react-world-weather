// Form.tsx

import { StyledButton, StyledInput } from "./FormStyle"

type FormPropsType = {
  setCity: React.Dispatch<React.SetStateAction<string>>
  getWeather: (event: React.FormEvent<HTMLFormElement>) => void
}

const Form = (props: FormPropsType) => {
  return(
    <div>
      <form onSubmit={props.getWeather}>
        <StyledInput 
          type="text" 
          name="city" 
          placeholder="City Name"
          onChange={event => props.setCity(event.target.value)}
        />
        <StyledButton type="submit">Get Weather</StyledButton>
      </form>
    </div>
  );
};

export default Form;
