import styled from 'styled-components';

export const List = styled.ul`
  padding-left: 20px;
`;

export const Item = styled.li`
  position: relative;

  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 400px;
  width: 100%;
  min-height: 54px;
  padding: 8px 100px 8px 16px;
  border: 1px solid ${({ theme }) => theme.colors.primaryBg};
  border-radius: 8px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
