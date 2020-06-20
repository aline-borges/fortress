import styled from 'styled-components';

export const Style = styled.p`
  font-family: 'Poller One', cursive;
  font-size: 18px;
  text-align: center;
  margin: 5px 15px 5px 2px;

  &:last-of-type {
    font-size: 25px;
  }

  @media (max-width: 425px) {
    font-size: 15px;

    &:last-of-type {
      font-size: 20px;
    }
  }
`;

export default Style