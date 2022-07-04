import styled from 'styled-components';

export const StyledAuth = styled.section`
  padding-top: 56px;
  padding-bottom: 100px;
`;

export const Form = styled.div`
  padding-top: 30px;
  padding-right: 16px;
  padding-left: 16px;
  max-width: 500px;
  margin-right: auto;
  margin-left: auto;
  form {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;
  color: #000;
`;

export const StyledTextField = styled.div`
  display: block;

  .MuiInputBase-root {
    width: 100%;
  }
`;
