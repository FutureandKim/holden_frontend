import React from 'react';
import styled from 'styled-components';
import Profile from '../api/json/Profile.json';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  margin: 50px 0 0 40px;
`;
const ProFileContainer = styled.div`
  width: 400px;
  height: 250px;
  text-align: center;
  border-radius: 12px;
  border: 1px solid #e3e3e3;
  margin-bottom: 40px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100px;
  margin-top: 15px;
`;

const Name = styled.div`
  font-size: 30px;
  margin: 10px 0 15px 0;
  font-family: Pretendard-Bold;
`;

const Btn = styled.button`
  width: 500px;
  height: 120px;
  font-size: 40px;
  border-radius: 12px;
  margin-top: 25px;
  background: #fff;
  border: 1px solid #e3e3e3;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background: rgba(43, 95, 136, 0.14);
  }
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #000;
`;

export default function ProfileBox() {
  const name = localStorage.getItem('name');
  const profile_image = localStorage.getItem('profileImage');
  return (
    <Container>
      <ProFileContainer>
        <Image src={profile_image} alt='profile' />
        <Name>{name}</Name>
      </ProFileContainer>
      <LinkStyled to='/day'>
        <Btn>하루 돌아보기</Btn>
      </LinkStyled>
      <LinkStyled to='/quiz'>
        <Btn>하루 퀴즈</Btn>
      </LinkStyled>
      <LinkStyled to='/stretching'>
        <Btn>하루 스트레칭</Btn>
      </LinkStyled>
    </Container>
  );
}
