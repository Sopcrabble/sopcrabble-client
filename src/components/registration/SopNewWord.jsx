// import { getData, putData } from 'libs/api';
// import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { useLocation, useNavigate } from 'react-router';
// import WordBox from './WordBox';
import Question from './Question';
// import { client } from 'libs/api';

const SopNewWord = () => {
  const title = 'Q. 솝커톤 과제마감 1분 전인데 아직 작업중인 기분은?(3)';
  //   const location = useLocation();
  //   const id = location.id;
  //   // const { title, wordNum } = await client.get();
  //   const wordNum = 3;
  //   const [newWord, setNewWord] = useState('');
  //   const [answerId, setAnswerId] = useState('');
  //   const [word, setWord] = useState('');

  //   const getDataWord = async () => {
  //     const { answer } = await client.get('/answer');
  //     setWord(answer.word);
  //     setAnswerId(answer.answerId);
  //     console.log(answer.answerId, answer.word);
  //   };
  //   useEffect(() => {
  //     getDataWord();
  //   }, []);

  //   // const { answerId, word } = await getData(`answer/${id}`);
  //   const leaveWordNum = wordNum - word.length() - 1;
  //   const initLeaveWordArray = () => {
  //     const arr = [];
  //     for (let i = 0; i < leaveWordNum; i++) arr.push('');
  //     return arr;
  //   };

  //   const onClick = async () => {
  //     const tempNewWord = word + newWord;
  //     // putData({
  //     //   uri: `answer/${answerId}`,
  //     //   data: { word: tempNewWord },
  //     // });

  //     await client.post('/answer', {
  //       answerId,
  //       word: tempNewWord,
  //     });
  //     if (tempNewWord.length === wordNum) {
  //       const navigate = useNavigate();
  //       navigate('/likelist', { id: id });
  //     }
  //   };

  return (
    // <StyledNewWord>
    //   <Question title={title} />
    //   <StyledSopNewWord>
    //     {word.split('').map((w, idx) => {
    //       return <WordBox key={idx} value={w} />;
    //     })}
    //     <span>
    //       <input type="text" value={newWord} onChange={() => setNewWord(newWord)} />
    //       <button onClick={onClick}>입력</button>
    //     </span>
    //     {0 < leaveWordNum ? initLeaveWordArray().map((w, idx) => <WordBox key={idx} value={w} />) : <></>}
    //   </StyledSopNewWord>
    // </StyledNewWord>
    <StyledNewWord>
      <Question title={title} />
      <StyledSopNewWord>
        <span>솝</span>
        <span>됐</span>
        <span>다</span>
      </StyledSopNewWord>
    </StyledNewWord>
  );
};

const StyledNewWord = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  /* align-items: center; */
`;

const StyledSopNewWord = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15rem;
  & > span {
    width: 18rem;
    height: 18rem;
    border-radius: 1rem;
    border: 0.8rem solid #000000;
    font-size: 3.6rem;
    font-weight: 800;
    line-height: 17rem;
    text-align: center;
    margin-right: 2.4rem;

    & > input {
      outline: none;
      font-size: 3.6rem;
      font-weight: 800;
    }

    & > button {
      width: 12.1rem;
      height: 4.8rem;
      background-color: #000000;
      color: #ffffff;
      line-height: 4.8rem;
      text-align: center;
    }
  }
  & > span:nth-child(2n-1) {
    background-color: #ffddef;
  }
  & > span:nth-child(2n) {
    background-color: #e5ffeb;
  }
  & > span:last-child {
    margin-right: 0;
  }
`;

export default SopNewWord;
