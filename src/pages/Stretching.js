import React, {useState} from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Pose from "../components/Pose";


const Container = styled.div`
    margin: 0 17% 0 17%;
    `;

const PageName = styled.div`
    font-size: 30px;
    margin-top: 40px;
    font-family: Pretendard-Medium;
    `;
const Text = styled.div`
    font-size: 27px;
    margin-top: 100px;
    `;

const StartBtn = styled.button`
    width: 340px;
    height: 70px;
    margin-top: 20px;
    padding: 15px 20px;
    font-size: 25px;
    border-radius: 12px;
    border: 1px solid #e3e3e3;
    color: #fff;
    background-color: #2b5f88;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    align-items: center;
    `;

const Stretching = () => {
    const [isPose, setisPose] = useState(false);
    
    const openPose = () => {
        setisPose(!isPose);
    };

    return (
        <>
            
                <Header />
                <Container>
                <PageName>하루 스트레칭</PageName>
                <StartBtn onClick={openPose}>시작하기</StartBtn>
                {isPose && <Pose />}
            </Container>
        </>
    );
};

export default Stretching;