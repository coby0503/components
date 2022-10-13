import React, { useRef } from "react";
import styled from "styled-components";
import Input from "../Input";

interface Props {}

const SlideForm: React.FC<Props> = () => {
  const focusRef = useRef<HTMLDivElement>(null);
  const getElementInfo = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    const height = e.target.clientHeight;
    const width = e.target.clientWidth;
    const top = e.target.offsetTop - 2;

    if (focusRef.current) {
      focusRef.current.style.width = width + "px";
      focusRef.current.style.height = height + "px";
      focusRef.current.style.top = top + "px";
    }
  };
  return (
    <FormWrap>
      <Slider ref={focusRef} />
      <Input autoFocus onFocus={getElementInfo} />
      <Input onFocus={getElementInfo} />
      <Input onFocus={getElementInfo} />
    </FormWrap>
  );
};
export default SlideForm;

const Slider = styled.div`
  position: absolute;
  left: -2px;
  width: 100%;
  height: 30px;
  border: 2px solid red;
  opacity: 0.5;
  transition: 0.2s ease-in-out;
  z-index: -1;
`;
const FormWrap = styled.div`
  position: relative;
  padding: 0;
  box-sizing: border-box;
  > input + input {
    margin-top: 40px;
  }
`;
