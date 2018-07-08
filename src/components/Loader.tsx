import styled, { keyframes } from 'styled-components';

const dualRing = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;
  &::after {
    content: ' ';
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #106cc8;
    border-color: #106cc8 transparent #106cc8 transparent;
    animation: ${dualRing} 1.2s linear infinite;
  }
`;
