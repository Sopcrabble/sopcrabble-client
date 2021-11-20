import React from 'react';
// import countState from './Atoms';
// import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../assets/images/logo.svg';
import { ReactComponent as Main } from '../assets/images/main.svg';

const Home = () => {
  // const [counter, setCounter] = useRecoilState(countState);
  // const getArticleData = async () => {
  //   const { data } = await client.get("/article")
  //   setArticleData(data)
  //   // http://localhost:4000/ - 다회 통신 -> axios.create
  // }

  return (
    <StyledWrapper>
      <Logo className="logo" />
      <Main className="main" />
      {/* <div>
        {articleData.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div> */}
      <div className="buttons">
        <Link to="/registration">
          <StyledButton>의뢰 하기</StyledButton>
        </Link>
        <Link to="/favorite">
          <StyledButton>솝조어</StyledButton>
        </Link>
      </div>
      <button className="fiction"></button>
    </StyledWrapper>
  );
};

export default Home;

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  animation: fadeIn 1.5s ease-in-out;
`;

const StyledButton = styled.button`
  width: 12.1rem;
  height: 4.8rem;
  margin-top: 5.6rem;
  border-radius: 1.5rem;
  background-color: #000000;
  color: white;
  font-weight: bold;
  font-size: 2.4rem;
  line-height: 2.9rem;

  &:first-of-type {
    margin-right: 4rem;
  }
`;
