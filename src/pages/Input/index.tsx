import React from "react";
import styled from "styled-components";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  return <MyInput ref={ref} {...props} />;
});
export default Input;

const MyInput = styled.input`
  width: 100%;
  height: 50px;
  outline: 0;
  border: 0;
  padding: 0;
  background-color: #f5f5f5;
  color: black;
  padding: 0 16px;
  box-sizing: border-box; ;
`;
