import styled from 'styled-components';

export const ContactsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 350px;
  margin: 0;
  padding: 20px;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DeleteBtn = styled.button`
  background-color: #d81414;
  color: white;
  padding: 5px;
  border: none;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;
