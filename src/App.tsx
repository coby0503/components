import { useEffect, useRef } from "react";
import "./App.css";
import Input from "./pages/Input";
import Uploader from "./pages/Uploader";
import styled from "styled-components";
import Button from "./pages/Button";
import Select from "./pages/Dropdown";
import Editor from "./pages/Editor";
import SlideForm from "./pages/SlideForm";
import Skeleton from "./pages/Skeleton";
import Infinite from "./pages/Infinite";
import TS from "./pages/TS";
import Dropdown from "./pages/Dropdown";

function App() {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);
  return (
    <div className="App">
      <TestBox>
        <Dropdown />
      </TestBox>
      {/* <TS /> */}
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
