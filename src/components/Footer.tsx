import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 1rem;
`;

const CopyRight = styled.p`
  font-size: 1rem;
`;

const Footer = () => {
  return (
    <Container>
      <CopyRight>© 2016 Chang Liu</CopyRight>
    </Container>
  );
};

export default Footer;
