import React, { useEffect, useRef } from "react";
import styled from "styled-components";

interface Props {
  content: string;
}

const Editor: React.FC<Props> = ({ content }) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const getContent = () => {
    console.log(editorRef.current?.innerHTML);
  };
  const setBold = () => {
    document.execCommand("bold");
    console.log(document.getSelection()?.focusNode);
  };
  const setLink = () => {
    document.execCommand("createLink", false, "https://www.naver.com");
  };

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = content;
    }
    document.addEventListener("selectionchange", (e: any) => {
      console.log(window.getSelection()?.getRangeAt(0));
      console.log(window.getSelection()?.toString());
    });
  }, []);

  return (
    <div>
      <button onClick={setBold}>굵게</button>
      <button onClick={setLink}>링크</button>
      <button>굵게</button>
      <button>굵게</button>
      <button>굵게</button>
      <button onClick={getContent}>내용 가져오기</button>
      <EditorWrap
        ref={editorRef}
        contentEditable
        onChange={(e) => console.log(e)}
      ></EditorWrap>
    </div>
  );
};
export default Editor;

const EditorWrap = styled.div`
  border: 1px solid black;
  height: 300px;
  &:focus {
    border: 1px solid red;
  }
  &:focus-visible {
    outline: 0;
  }
`;
