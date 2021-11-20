import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ic_arrow_back } from 'assets';

const Registration = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  const [values, setValues] = useState({ title: '', wordNum: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <StyledRegistration>
      <button onClick={handleClick}>
        <img src={ic_arrow_back} />
      </button>
      <div> 솝조어를 만들고 싶나요? 만들고 싶은 솝조어를 의뢰해보세요. </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">의뢰명</label>
          <input
            id="title"
            value={values.title}
            name="title"
            onChange={handleChange}
            placeholder="의뢰명을 입력해주세요."
          />
        </div>
        <div>
          <label htmlFor="num" className="second">
            글자수
          </label>
          <input
            id="num"
            value={values.wordNum}
            name="wordNum"
            onChange={handleChange}
            placeholder="글자 수를 2~6자로 입력해주세요."
          />
        </div>
        <button type="submit">의뢰</button>
      </form>
    </StyledRegistration>
  );
};

export default Registration;

const StyledRegistration = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: fadeIn 1.5s ease-in-out;

  & > button {
    position: relative;
    top: -25%;
    left: -35%;
    background: transparent;
  }

  & > div:nth-child(2) {
    font-weight: bold;
    font-size: 3.5rem;
    line-height: 4.2rem;

    margin-bottom: 9.6rem;
  }

  & > form > div:first-child {
    margin-bottom: 2.5rem;
  }

  & > form > div > label:first-child {
    font-weight: bold;
    font-size: 2.8rem;
    line-height: 3.4rem;

    margin-right: 2.5rem;
  }

  & > form > div > input {
    width: 99rem;
    height: 7.5rem;
    padding-left: 1rem;
    border: 0.8rem solid #000000;
    border-radius: 1rem;

    font-size: 2.2rem;
    font-family: Pretendard;
  }

  & > form > button {
    position: relative;
    right: -89%;

    width: 12.1rem;
    height: 4.8rem;
    margin-top: 5.6rem;
    border-radius: 1.5rem;

    background-color: #000000;
    color: white;

    font-weight: bold;
    font-size: 2.4rem;
    line-height: 2.9rem;
  }
`;
