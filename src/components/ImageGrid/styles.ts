import styled from 'styled-components';

export const Image = styled.img<{ loaded: boolean }>`
  opacity: ${(props) => (props.loaded ? 1 : 0)};
  width: 100%;
  border-radius: 5px;
  transition-timing-function: ease-in;
  transition-duration: 1s;
  transition-delay: 0.6s;
`;
