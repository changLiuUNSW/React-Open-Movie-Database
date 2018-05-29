import * as React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import { logoSpin } from '../styles/animations';
import Nav from './components/Nav';
import TodoContainer from './containers/TodoContainer';

const Container = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const Title = styled.h1`
  font-size: 1.5em;
`;

const Intro = styled.p`
  font-size: large;
`;

const Logo = styled.img`
  animation: ${logoSpin} infinite 20s linear;
  height: 80px;
`;

class App extends React.Component {
  public render() {
    return (
      <Container>
        <Nav title="Open Movie Database"/>
        <Header>
          <Logo src={logo} alt="logo" />
          <Title>Welcome to React</Title>
        </Header>
        <Intro>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </Intro>
        <TodoContainer />
      </Container>
    );
  }
}

export default App;
