import styled from '@emotion/styled';

export const mainDiv = styled.div`
  width: 300px;
  margin: 0;
  border: 1px solid gray;
  padding: 20px;
`;
export const UlOfContact = styled.ul`
  list-style-type: circle;
  padding: 0;
  margin: 0;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 8px;
`;

export const Button = styled.button`
  padding: 8px;
  min-height: 30px;
  font-size: 14px;
  text-align: center;
  color: #fff;
  background-color: #2196f3;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  border-radius: 5px;
  border: none;
`;
