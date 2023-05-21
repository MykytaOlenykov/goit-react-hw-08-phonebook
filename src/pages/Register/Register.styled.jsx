import styled from 'styled-components';
import backgroundImg from 'images/background.jpg';
import backgroundImg2x from 'images/background@2x.jpg';

export const Section = styled.section`
  &::after {
    content: '';
    position: absolute;
    top: 24px;
    left: 0;
    z-index: -1;
    display: block;
    width: 100%;
    height: 520px;
    background-image: url(${backgroundImg});
    background-size: cover;
    background-position: center;
    border-radius: 15px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${backgroundImg2x});
      background-size: cover;
      background-position: center;
    }
  }
`;

export const Title = styled.h1`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;

export const Text = styled.p`
  margin-bottom: 113px;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.3;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;
