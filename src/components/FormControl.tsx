import styled from 'styled-components';

interface Props {
  error?: boolean;
}

export const InputControl = styled.input`
  display: block;
  padding: 0.375rem 0.75rem;
  width: 14rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: ${(props: Props) => (props.error ? '1px solid #f05050' : '1px solid #ced4da')};
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    outline: ${(props: Props) => props.error && '#f05050'};
  }
`;
