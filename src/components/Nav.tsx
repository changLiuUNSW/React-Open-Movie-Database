import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.nav`
  background-color: #106cc8;
  color: rgba(255, 255, 255, 0.87);
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0.5rem 1rem;
`;

const Title = styled(Link)`
  color: rgba(255, 255, 255, 0.87);
  outline: none;
  text-decoration: none;
  font-size: 1.25rem;
`;

const Nav = () => {
  return (
    <Container>
      <Title to="/">React Open Movie Database</Title>
    </Container>
  );
};

export default Nav;
