import { useEffect, useRef } from "react";
import "./App.css";
import Input from "./pages/Input";
import Uploader from "./pages/Uploader";
import styled from "styled-components";
import Button from "./pages/Button";
import Select from "./pages/Select";
import Editor from "./pages/Editor";
import SlideForm from "./pages/SlideForm";

function App() {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);
  return (
    <div className="App">
      {/* <TestBox>
        <Input ref={ref} />
      </TestBox>
      <TestBox>
        <Uploader />
      </TestBox>
      <TestBox>
        <Button />
      </TestBox>
      <TestBox>
        <Select />
      </TestBox> */}
      <TestBox>
        <SlideForm />
      </TestBox>
      {/* <TestBox>
        <Editor content="<b>안녕하세요 저의</b> 이름은 문재민입니다.<div><br></div><div>저의 별명은 문제가 있는 문재민입니다.</div><div><br></div><div><br></div><div><br></div><div><br></div><div>나이는 20살이지만 27살 형한테 대드는 것이 취미입니다.</div>" />
      </TestBox> */}
    </div>
  );
}

export default App;

const TestBox = styled.div`
  width: 500px;
  height: 500px;
  & + & {
    margin-top: 100px;
  }
  border: 1px solid black;
`;
