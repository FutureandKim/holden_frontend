import React from 'react';
import styled from 'styled-components';
import { KAKAO_AUTH_URL } from '../components/auth/kakaoLogin';

const Container = styled.div`
  height: 100vh;
  text-align: center;
  #background: rgba(43, 95, 136, 0.1);
`;
const Logo = styled.img`
  margin-top: 220px;
  width: 300px;
`;

const Slogan = styled.div`
  font-size: 30px;
  font-family: Pretendard-Medium;
  margin-bottom: 150px;
`;

const LoginBtn = styled.button`
  width: 400px;
  height: 53px;
  border-radius: 12px;
  color: #2a2a2a;
  font-family: Pretendard-Medium;
  background: #fee500;
  background-image: url(${process.env.PUBLIC_URL}/assets/kakao-logo.png);
  background-repeat: no-repeat;
  background-position: 32px 50%;
  background-size: 23px;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

const Text = styled.div`
  font-size: 12px;
  margin-top: 5px;
  color: #b0b0b0;
`;

const Bold = styled.span`
  font-family: Pretendard-Medium;
`;

export default function Login() {
  return (
    <Container>
      <Logo src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt='logo' />
      <Slogan>치매 환자를 위한 뇌운동 서비스</Slogan>
      <a href={KAKAO_AUTH_URL}>
        <LoginBtn>카카오로 로그인/회원가입</LoginBtn>
      </a>
      <Text>
        회원가입 시 HOLDEN의 <Bold>서비스 이용 약관</Bold>과{' '}
        <Bold>개인정보 보호정책</Bold>에 동의하게 됩니다.
      </Text>
    </Container>
  );
}
