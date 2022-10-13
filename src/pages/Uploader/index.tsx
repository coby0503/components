import React, { useRef } from "react";
import styled from "styled-components";

interface Props {}

const Uploader: React.FC<Props> = () => {
  const uploaderRef = useRef<HTMLDivElement>(null);
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (e.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...e.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === "file") {
          const file = item.getAsFile();
          console.log(file);
          console.log(`… file[${i}].name = ${file?.name}`);
        }
      });
    } else {
      // Use DataTransfer interface to access the file(s)
      [...e.dataTransfer.files].forEach((file, i) => {
        console.log(`… file[${i}].name = ${file.name}`);
      });
    }
    if (uploaderRef.current) {
      uploaderRef.current.style.border = "1px solid black";
    }
  };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (uploaderRef.current) {
      uploaderRef.current.style.border = "1px solid pink";
    }
    // console.log(e);
  };
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    if (uploaderRef.current) {
      uploaderRef.current.style.border = "1px solid black";
    }
  };
  return (
    <UploaderWrap
      id="drop_zone"
      ref={uploaderRef}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDragEnd={() => console.log("eeee")}
      onDragExit={() => console.log("gogogoogog")}
    >
      Drag one or more files to this <i>drop zone</i>.
    </UploaderWrap>
  );
};
export default Uploader;

const UploaderWrap = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  transition: 0.3s linear;
  &:hover {
    border: 1px solid pink;
  }
`;
