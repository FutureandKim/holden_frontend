import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

const Container = styled.div`
  padding: 0 0 0 17%;
  box-shadow: 0px 4px 2px 0px rgba(0, 0, 0, 0.04);
`;

const Logo = styled.img`
  width: 250px;
  margin: 20px 0 10px 0;
`;

const Menu = styled(NavLink)`
  margin: 20px 81px 0 10px;
  padding-bottom: 10px;
  display: inline-block;
  color: #676767;
  font-size: 18px;
  font-family: Pretendard-Medium;
  text-decoration: none;
  &:hover {
    font-family: Pretendard-Bold;
    color: #2b5f88;
    padding-bottom: 8px;
    border-bottom: 2px solid #2b5f88;
  }
`;

export default function Header() {
  const activeStyle = {
    color: '#2B5F88',
    borderBottom: '2px solid #2B5F88',
    paddingBottom: '8px',
    fontFamily: 'Pretendard-Bold',
  };

  return (
    <Container>
      <Link to='/'>
        <Logo
          src={`${process.env.PUBLIC_URL}/assets/header_logo.png`}
          alt='logo'
        />
      </Link>
    </Container>
  );
}
