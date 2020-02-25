import React from "react";
import styled from 'styled-components';

// const Button = ({ type = "text", label, value, onChange }) => (
//   <div className="simple-form-group">
//     {styled.button``}
//     {/* <button style={{ backgroundColor: "white"}}> Test </button> */}
//   </div>
// );

// export default Button;

const styledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;
// const Container = styled.div`
//   text-align: center;
// `

class Button extends React.Component {
  
  render() {
    <styledButton> test </styledButton>
  }
}
export default Button