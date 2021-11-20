import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import countState from './Atoms';
// import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../assets/images/logo.svg';
import { ReactComponent as Main } from '../assets/images/main.svg';
import { ReactComponent as Landing } from '../assets/images/landing.svg';

const Home = () => {
  const navigate = useNavigate();
  const handleRelay = () => {
    navigate('/relay');
  };
  let [alert, setAlert] = useState(true);
  useEffect(() => {
    // axios.get => useEffect에서 axios쓰는 법. 물론 Detail 컴포넌트 처음 로드시에만 ajax로 데이터를 가져오려면 []를 꼭 써줘야한다.
    let timer = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  // const [counter, setCounter] = useRecoilState(countState);
  // const getArticleData = async () => {
  //   const { data } = await client.get("/article")
  //   setArticleData(data)
  //   // http://localhost:4000/ - 다회 통신 -> axios.create
  // }

  return (
    <StyledWrapper>
      {alert === true ? (
        <Landing className="landing" />
      ) : (
        <>
          <Logo className="logo" />
          <Main className="main" />
          <div className="buttons">
            <Link to="/registration">
              <StyledButton>의뢰 하기</StyledButton>
            </Link>
            <Link to="/favorite">
              <StyledButton>솝조어</StyledButton>
            </Link>
          </div>
          <button onClick={handleRelay} className="fiction"></button>
        </>
      )}
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
