import styled from 'styled-components';

export const List = styled.ul`
  height: 350px;
  overflow: auto;
  padding-right: 24px;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: ${({ theme }) => theme.colors.secondaryBg};
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;
