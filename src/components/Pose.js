import React from "react";
import styled from "styled-components";
import Webcam from "react-webcam";

const Container = styled.div`
display: flex;
justify-content: center;
margin-top: 50px;
`;

const PageName = styled.div`
`;

const Img = styled.img`
height: 400px;
margin-right: 50px;
`;

const poses = [
    `${process.env.PUBLIC_URL}/assets/pose/circle.png`,
    `${process.env.PUBLIC_URL}/assets/pose/heart.png`,
    `${process.env.PUBLIC_URL}/assets/pose/left-neck.png`,
    `${process.env.PUBLIC_URL}/assets/pose/left-side.png`,
    `${process.env.PUBLIC_URL}/assets/pose/manse.png`,
    `${process.env.PUBLIC_URL}/assets/pose/right-hand.png`,
    `${process.env.PUBLIC_URL}/assets/pose/right-neck.png`,
    `${process.env.PUBLIC_URL}/assets/pose/right-side.png`,
    `${process.env.PUBLIC_URL}/assets/pose/round.png`,
    `${process.env.PUBLIC_URL}/assets/pose/sit.png`,
];

const getRandomPose = () => {
    const randomIndex = Math.floor(Math.random() * poses.length);
    return poses[randomIndex];
}

const Pose = () => {
    return (
        <>
            <Container>
                <Img src={getRandomPose()} alt="포즈" />
                <Webcam height={400}/>
            </Container>
        </>
    );
};

export default Pose;