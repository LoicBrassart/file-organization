import styled from 'styled-components';

const SButton = styled.button`
  background-color: ${({ color, danger, ok, warn }) => {
    if (danger) return 'red';
    if (warn) return 'yellow';
    if (ok) return 'green';
    if (color) return color;
    return 'red';
  }};
  border-radius: 0;
  border: 1px solid grey;
  margin: 5px;
  padding: 5px;

  &:first-of-type {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &:not(:first-of-type) {
    border-left: none;
    margin-left: 0;
  }
  &:last-of-type {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  &:not(:last-of-type) {
    margin-right: 0;
  }
`;

export default SButton;
