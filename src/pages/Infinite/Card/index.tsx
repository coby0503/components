import React from "react";
import styled from "styled-components";

interface Props {
  number: number;
}

const Card: React.FC<Props> = ({ number }) => {
  return (
    <CardWrap>
      <div>( {number}번 ) 카드입니다.</div>
      <div>인피니티 스크롤</div>
    </CardWrap>
  );
};
export default Card;

const CardWrap = styled.div`
  border-radius: 30px;
  background-color: white;
  height: 150px;
  & + & {
    margin-top: 20px;
  }
`;
