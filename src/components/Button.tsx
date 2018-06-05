import styled from 'styled-components';
import { color } from '../styles/constants';

export const PrimaryButton = styled.button`
  /* Adapt the colours based on primary prop */
  background: ${color.primary};
  color: #fff;
  border-color: ${color.primary};
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:not(:disabled) {
    cursor: pointer;
  }
  &:focus {
    text-decoration: none;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
  }
  &:hover {
    background-color: #0069d9;
    border-color: #0062cc;
  }
  &:disabled{
    opacity: .65;
  }
`;

export const DangerButton = PrimaryButton.extend`
  background: ${color.danger};
  border-color: ${color.danger};
  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(220,53,69,.5);
  }
  &:hover {
    background-color: #bd2130;
    border-color: #b21f2d;
  }
`;
