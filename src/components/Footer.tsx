import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 1rem 1rem;
  font-size: 1rem;
`;

const Footer = () => {
  return (
    <Container>
      © 2016 Chang Liu
    </Container>
  );
};

export default Footer;
