import * as React from 'react';
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

const Title = styled.h1`
  font-size: 1.25rem;
`;

interface NavProps {
  title: string;
}

const Nav = ({ title }: NavProps) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default Nav;
