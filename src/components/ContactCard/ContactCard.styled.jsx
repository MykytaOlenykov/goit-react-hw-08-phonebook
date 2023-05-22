import { IoMdTrash } from 'react-icons/io';
import { IoPencilSharp } from 'react-icons/io5';
import styled from 'styled-components';

export const ContactCard = styled.div`
  position: relative;
  width: 100%;
  padding: 26px;
  background-color: ${({ theme }) => theme.colors.primaryBg};
  border-radius: 12px;
`;

export const Name = styled.p`
  margin-bottom: 7.5px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Number = styled.p`
  display: flex;
  gap: 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.secondaryText};

  & > span {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const List = styled.ul`
  position: absolute;
  top: 50%;
  right: 12px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  transform: translateY(-50%);
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 50px;
  font-weight: 700;
  font-size: 10px;
  line-height: 1.5;
  padding: 0;
  border: none;
  background-color: transparent;
  transition: background-color
    ${({ theme }) => `${theme.duration} ${theme.timingFunction}`};
  cursor: pointer;

  &.delete {
    color: ${({ theme }) => theme.colors.iconBtn};
  }

  &.edit {
    color: ${({ theme }) => theme.colors.primaryText};
  }

  &:hover:not(:disabled) {
    color: ${({ theme }) => theme.colors.accent};
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export const DeleteIcon = styled(IoMdTrash)`
  width: 15px;
  height: 15px;
  fill: currentColor;
`;

export const EditIcon = styled(IoPencilSharp)`
  width: 12px;
  height: 12px;
  fill: currentColor;
`;
