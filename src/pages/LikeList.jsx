import React, { useState, useEffect } from 'react';
import LikeBox from 'components/likelist/LikeBox';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ic_arrow_back } from 'assets';
import { client } from 'libs/api';

const LikeList = () => {
  const [listTitle, setListTitle] = useState('');
  const [listData, setListData] = useState([]);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  const getLikeList = async () => {
    const { data } = await client.get('/list');
    setListTitle(data.title);
    setListData(data.answers);
  };

  useEffect(() => {
    getLikeList();
  }, []);

  return (
    <StyledLikeList>
      <button onClick={handleClick}>
        <img src={ic_arrow_back} />
      </button>
      <h2>{listTitle}</h2>
      <div>
        {listData.map((list) => (
          <LikeBox key={list.answerId} list={list} />
        ))}
      </div>
      <Link to="/">
        <StyledHomeBtn>홈으로</StyledHomeBtn>
      </Link>
    </StyledLikeList>
  );
};

export default LikeList;

const StyledLikeList = styled.div`
  & > button {
    padding: 0;
    margin-top: 1.7rem;
    background: transparent;
  }
  & > h2 {
    font-weight: 700;
    font-size: 3.5rem;
    margin-top: 19.5rem;
    margin-bottom: 4.7rem;
  }
`;

const StyledHomeBtn = styled.button`
  font-size: 2.4rem;
  font-weight: 700;
  color: #ffffff;
  padding: 1rem 2.9rem;
  background-color: rgba(0, 0, 0, 1);
  border-radius: 1.5rem;
  margin-top: 19.9rem;
  margin-bottom: 9.3rem;
  float: right;
`;
