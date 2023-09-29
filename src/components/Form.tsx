// Form.tsx

import { SButton, StyledInput } from "./FormStyle"

type FormPropsType = {
  setCity: React.Dispatch<React.SetStateAction<string>>
  getWeather: (event: any) => void
}

const Form = (props: FormPropsType) => {
  return(
    <div>
      <form>
        <StyledInput 
          type="text" 
          name="city" 
          placeholder="City Name"
          onChange={event => props.setCity(event.target.value)}
        />
        <SButton type="submit" onClick={props.getWeather}>Get Weather</SButton>
      </form>
    </div>
  );
};

export default Form;
