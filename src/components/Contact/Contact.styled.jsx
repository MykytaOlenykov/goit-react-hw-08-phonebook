import styled from 'styled-components';

export const ContactCard = styled.div`
  position: relative;

  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 400px;
  width: 100%;
  min-height: 54px;
  padding: 8px 100px 8px 16px;
  border: 1px solid ${({ theme }) => theme.colors.primaryBg};
  border-radius: 8px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Button = styled.button`
  position: absolute;
  top: 8px;
  right: 16px;

  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 12px;
  color: ${({ theme }) => theme.colors.primaryText};
  background-color: ${({ theme }) => theme.colors.primaryBg};
  border: none;
  border-radius: 8px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14);
  transition: background-color
    ${({ theme }) => `${theme.duration} ${theme.timingFunction}`};
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.secondaryBg};
  }

  &:disabled {
    opacity: 0.5;
  }
`;
