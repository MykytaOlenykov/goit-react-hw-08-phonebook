import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  padding: 18px 24px;
  background-image: linear-gradient(
    112.83deg,
    rgba(255, 255, 255, 0.82) 0%,
    rgba(255, 255, 255, 0.8) 110.84%
  );
  border: 1.5px solid ${({ theme }) => theme.colors.primary};
  background-size: cover;
  box-shadow: 0px 7px 23px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10.5px);
  border-radius: 15px;
`;
