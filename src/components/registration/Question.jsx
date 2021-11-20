import React from 'react';
import styled from 'styled-components';

const Question = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>;
};

const StyledTitle = styled.div`
  font-size: 3.5rem;
  font-weight: 800;
`;

export default Question;
