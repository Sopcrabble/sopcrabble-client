import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ic_arrow_back, img_favorite } from 'assets';

const Favorite = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/home');
  };
  return (
    <StyledFavorite>
      <StyledHeader>
        <button onClick={handleClick}>
          <img src={ic_arrow_back} />
        </button>
        <div>솝조어</div>
      </StyledHeader>
      <img src={img_favorite} />
    </StyledFavorite>
  );
};

export default Favorite;

const StyledFavorite = styled.div`
  & > img {
    margin-top: 9.2rem;
    margin-bottom: 11.6rem;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.7rem;
  & > button {
    padding: 0;
    background: transparent;
    margin-right: 5.4rem;
  }
  & > div {
    line-height: 4.2rem;
    font-size: 3.5rem;
    font-weight: 700;
  }
`;
