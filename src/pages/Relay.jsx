import SopNewWord from 'components/registration/SopNewWord';
import React from 'react';
import styled from 'styled-components';

const Relay = () => {
  return (
    <StyledRoot>
      <SopNewWord />
    </StyledRoot>
  );
};

const StyledRoot = styled.main`
  height: 100vh;
  align-items: center;
`;

export default Relay;
