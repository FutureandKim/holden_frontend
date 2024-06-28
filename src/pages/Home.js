import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import TodayBox from '../components/TodayBox';
import ProfileBox from '../components/ProfileBox';

const Container = styled.div`
  margin: 0 17% 0 17%;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Box>
          <TodayBox />
          <ProfileBox />
        </Box>
        <div style={{ marginTop: '130px' }}></div>
      </Container>
    </>
  );
}
