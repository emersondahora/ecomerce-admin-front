import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { shade } from 'polished';

export const Container = styled.header`
  color: #fff;
  background: #3c8dbc;
  height: 50px;
  border-bottom: 1px solid #666;
  display: flex;
`;
export const Title = styled(Link)`
  line-height: 50px;
  background: #367fa9;
  color: #fff;
  height: 50px;
  width: 200px;
  justify-content: center;
  text-align: center;
  font-size: 20px;

  &:hover {
    background: ${shade(0.2, '#367fa9')};
  }
  &:active {
    background: ${shade(0.5, '#367fa9')};
  }

  > span {
    font-weight: 700;
  }
`;

export const Nav = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;

  > button {
    border: 0;
    background: none;
    padding: 10px;
    color: #fff;
    &:active {
      background: ${shade(0.2, '#367fa9')};
    }
  }
`;

export const Profile = styled.button`
  justify-content: center;
  align-items: center;
  position: relative;
  display: flex;
  padding: 0 20px;
  font-size: 14px;
  z-index: 100000;
  &:hover {
    background: ${shade(0.1, '#367fa9')};
  }
  &:active {
    background: ${shade(0.5, '#367fa9')};
  }

  > img {
    width: 30px;
    height: 30px;
    margin-right: 5px;
    border-radius: 50%;
  }
`;

export const ProfileInfo = styled.div`
  position: absolute;
  z-index: 100000;
  right: 1px;
  top: 52px;
  background: #3c8dbc;
  border: 1px solid #dddddd;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    margin: 15px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  span {
    font-size: 16px;
  }

  > div {
    margin-top: 20px;
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    background: #f9f9f9;
    button {
      padding: 5px 10px;
      border: 1px solid #666666;
      color: #666666;
      background: transparent;

      &:active {
        background: #eee;
      }
    }
  }
`;

export const ProfileInfoGlass = styled.div`
  position: fixed;
  z-index: 100000;
  background: #ccc;
  width: 100%;
  height: 100%;
  left: 0;
  opacity: 0.6;
`;
