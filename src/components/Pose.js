import React from "react";
import styled from "styled-components";

const Container = styled.div`
`;

const PageName = styled.div`
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
                <PageName>포즈</PageName>
                <img src={getRandomPose()} alt="포즈" />
                
            </Container>
        </>
    );
};

export default Pose;