import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 24px;
  }
`;
export const Content = styled.div`
  flex: 1;
  padding-top: 15px;
  box-sizing: border-box;
  border-top: 1px solid #3c8dbc;
  background: #ffffff;

  table {
    cursor: default;
    background: #fff;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    flex: 1;
    border-bottom: 1px solid #f4f4f4;
    thead {
      td {
        border-bottom: 2px solid #f4f4f4;
        font-weight: bold;
        vertical-align: bottom;
        padding: 8px;
      }
    }
    tbody {
      display: table-row-group;
      vertical-align: middle;
      border-color: inherit;
      tr:nth-of-type(odd) {
        background: #f9f9f9;
      }
      tr:hover {
        background: #f5f5f5;
      }
      td {
        padding: 8px;
        border-top: 1px solid #f4f4f4;
      }
      td.action {
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
    }
  }
`;
