import styled from '@emotion/styled';

export const TDButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  width: 100%;
  text-align: left;
  cursor: ${p => !p.disabled && 'pointer'};
`;

export const AddTaskButton = styled.button`
  font-weight: 700;
  cursor: pointer;
  padding: 4px 16px;
`;

export const AddTaskFormButton = styled.button`
  width: 50%;
  font-weight: 700;
  cursor: pointer;
  margin-top: 16px;
  padding: 4px;
`;

export const CloseButton = styled.button`
  display: block;
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  margin-left: auto;
`;

export const UserMenuBtn = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
`;
