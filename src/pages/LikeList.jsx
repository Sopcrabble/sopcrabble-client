import React, { useState, useEffect } from 'react';
import LikeBox from 'components/likelist/LikeBox';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ic_arrow_back } from 'assets';
import { client } from 'libs/api';

const LikeList = () => {
  const [listData, setListData] = useState([]);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  const getLikeList = async () => {
    const { data } = await client.get('/answer/list');
    setListData(data);
  };

  useEffect(() => {
    getLikeList();
  }, []);

  return (
    <StyledLikeList>
      <button onClick={handleClick}>
        <img src={ic_arrow_back} />
      </button>
      <h2>솝커톤 과제마감 1분전인데 아직 작업중인 기분 표현해줘 ...</h2>
      <div>
        {listData.map((list) => (
          <LikeBox key={list.id} list={list} />
        ))}
      </div>
      <LikeBox />
      <LikeBox />
      <LikeBox />
      <LikeBox />
      <Link to="/home">
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
