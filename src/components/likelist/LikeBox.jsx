import { ic_heart_selected, ic_heart_default } from 'assets';
import React from 'react';
import styled from 'styled-components';

const LikeBox = ({ list }) => {
  let isZero = 0;
  if (list.likeNum === 0) {
    isZero = 1;
  }
  return (
    <StyledLikeBox>
      <div>{list.word}</div>
      <button>
        <img src={isZero ? ic_heart_default : ic_heart_selected} />
      </button>
      <div>{list.likeNum}</div>
    </StyledLikeBox>
  );
};

export default LikeBox;

const StyledLikeBox = styled.div`
  display: flex;
  align-items: center;
  border: 8px solid #000000;
  border-radius: 10px;
  padding: 2rem 2.3rem;
  margin-top: 0;
  margin: 2.5rem 10rem;

  & > div {
    font-size: 2.8rem;
  }

  & > div:first-child {
    flex-grow: 1;
  }

  & > button {
    background: transparent;
  }
`;
