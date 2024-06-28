import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Webcam from 'react-webcam';

const Container = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Div = styled.div`
  display: flex;
`;

const Img = styled.img`
  height: 400px;
  margin-right: 50px;
`;

const PrevBtn = styled.button`
  width: 340px;
  height: 70px;
  margin-top: 20px;
  padding: 15px 20px;
  font-size: 25px;
  border-radius: 12px;
  border: 1px solid #e3e3e3;
  background: #fefdfd;
  margin-right: 50px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const NextBtn = styled.button`
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

const AgainImg = styled.img`
  width: 30px;
`;

const poses = [
  [
    `${process.env.PUBLIC_URL}/assets/pose/circle.png`,
    `${process.env.PUBLIC_URL}/assets/pose/heart.png`,
    `${process.env.PUBLIC_URL}/assets/pose/left-neck.png`,
  ],
  [
    `${process.env.PUBLIC_URL}/assets/pose/left-side.png`,
    `${process.env.PUBLIC_URL}/assets/pose/manse.png`,
    `${process.env.PUBLIC_URL}/assets/pose/right-hand.png`,
  ],
  [
    `${process.env.PUBLIC_URL}/assets/pose/right-neck.png`,
    `${process.env.PUBLIC_URL}/assets/pose/right-side.png`,
    `${process.env.PUBLIC_URL}/assets/pose/round.png`,
  ],
  [`${process.env.PUBLIC_URL}/assets/pose/sit.png`],
];

const getRandomPoses = () => {
  const randomIndex = Math.floor(Math.random() * poses.length);
  return poses[randomIndex];
};

const Pose = () => {
  const [time, setTime] = useState(5);
  const [posesToShow, setPosesToShow] = useState(getRandomPoses());
  const [previousPoses, setPreviousPoses] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) {
        setTime((prevTime) => prevTime - 1);
      }
      if (time === 0) {
        setPreviousPoses(posesToShow);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [time, posesToShow]);

  const handleNextClick = () => {
    setPosesToShow(getRandomPoses());
    setTime(5);
  };

  const handlePrevClick = () => {
    if (previousPoses) {
      setPosesToShow(previousPoses);
      setTime(5);
    }
  };

  return (
    <>
      <Container>
        <Div>
          {time === 0 ? null : (
            <>
              {posesToShow.map((pose, index) => (
                <Img key={index} src={pose} alt={`포즈 ${index + 1}`} />
              ))}
            </>
          )}
          {time === 0 ? (
            <div style={{ transform: 'scaleX(-1)' }}>
              <Webcam height={400} />
            </div>
          ) : null}
        </Div>

        <Div>
          <PrevBtn onClick={handlePrevClick} disabled={!previousPoses}>
            <AgainImg src={`${process.env.PUBLIC_URL}/assets/again.png`} />
          </PrevBtn>
          <NextBtn onClick={handleNextClick}>
            {time === 0 ? '다음' : time}
          </NextBtn>
        </Div>
      </Container>
    </>
  );
};

export default Pose;
