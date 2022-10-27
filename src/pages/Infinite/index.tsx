import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Card from "./Card";

interface Props {}

const Infinite: React.FC<Props> = () => {
  const test = [1, 2, 3, 4, 5, 6, 7];
  const observerRef = useRef<HTMLDivElement | null>(null);

  const callback = (entries: any, observer: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
      }
    });
  };
  const instance = axios.create({
    baseURL: "/api",
  });
  instance.interceptors.request.use((interceptor) => {
    console.log("호출한당~");
    return interceptor;
  });
  const getData = async () => {
    instance.get("/addresses", {
      data: { keyword: "연희로" },
    });
  };
  useEffect(() => {
    // Observer 선언
    const observer = new IntersectionObserver(callback);
    getData();
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
  }, [observerRef]);
  return (
    <div>
      <Wrap>
        {test.map((number) => (
          <Card key={number} number={number} />
        ))}
        <Observer ref={observerRef} />
      </Wrap>
    </div>
  );
};
export default Infinite;

const Wrap = styled.div`
  width: 500px;
  height: 800px;
  padding: 20px;
  overflow: auto;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.1);
`;

const Observer = styled.div`
  width: 10px;
  height: 1px;
  background-color: red;
`;
