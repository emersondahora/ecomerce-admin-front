import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  h1 {
    padding-left: 5px;
    display: flex;
    align-items: center;
    line-height: 40px;
    font-size: 24px;

    svg {
      margin-right: 10px;
    }
  }
`;
export const Content = styled.div`
  flex: 1;
  padding-top: 15px;
  box-sizing: border-box;
  border-top: 1px solid #3c8dbc;
  background: #ffffff;

  header {
    padding-left: 10px;
    margin-bottom: 10px;
  }
`;
