import styled from "styled-components"

export const StyledInput = styled.input`
  background-color: transparent;
  border: 0;
  border-bottom: solid 1px #f15186;
  width: 40%;
  padding-bottom: 4px;
  color: #fff !important;
  font-weight: lighter;
  letter-spacing: 2px;
  margin-bottom: 30px;
  margin-right: 20px;
  font-size: 20px;
`

export const SButton = styled.button`
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
  
  *:focus {
    outline: none;
    color: green;
  }
`
// export const SButton = styled.button`
//   button {
//     width: 40%;
//     border: 0;
//     padding: 8px 20px;
//     margin: 0 2px;
//     border-radius: 2px;
//     letter-spacing: 1px;
//     font-size: 1.5rem;
//     cursor: pointer;
//     background-color: #f15186;
//     color: #fff;
//   }
  
//   button:hover {
//     opacity: 0.9
//   }
  
//   *:focus {
//     outline: none;
//   }
// `
