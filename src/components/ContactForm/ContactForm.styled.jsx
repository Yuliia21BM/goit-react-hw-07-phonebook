import styled from 'styled-components';
import { Form, Field } from 'formik';

export const ContactsForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
  border: 1px solid black;
  padding: 15px;
`;

export const ForlLabel = styled.label`
  display: flex;
  gap: 10px;
  font-weight: 500;
`;

export const FormInput = styled(Field)`
  width: 100%;
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  max-width: 100px;
  margin-left: auto;
  margin-right: auto;
  background-color: blue;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  color: #fff;
  cursor: pointer;
`;
