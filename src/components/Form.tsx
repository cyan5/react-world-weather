// Form.tsx

type FormPropsType = {
  setCity: React.Dispatch<React.SetStateAction<string>>
  getWeather: (event: any) => void
}

const Form = (props: FormPropsType) => {
  return(
    <div>
      <form>
        <input 
          type="text" 
          name="city" 
          placeholder="City Name"
          onChange={event => props.setCity(event.target.value)}
        />
        <button type="submit" onClick={props.getWeather}>Get Weather</button>
      </form>
    </div>
  );
};

export default Form;
