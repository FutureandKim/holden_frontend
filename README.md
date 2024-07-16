# 치매환자를 위한 뇌운동 서비스 'HOLDEN'
홀든은 치매환자의 건강한 하루하루를 위한 치매 예방 뇌운동 서비스입니다.

<br/>

## 💁‍♀️ 프로젝트 배경
<img src="https://github.com/FutureandKim/holden_frontend/assets/95979743/b53896d2-f3a2-482a-8e56-0b4d02005e6d" width="400"/>
<img src="https://github.com/FutureandKim/holden_frontend/assets/95979743/0bbd1c4e-1cc8-4bd6-b36b-8dd4754c913a" width="400"/>

- 확장된 현대 스포츠의 의미에 따라 치매 환자를 위한 뇌운동 서비스를 기획하게 되었습니다.
- 치매 환자에게 꼭 필요한 활동이지만 치매환자들이 <b>잘 실천하지 않는 인지활동과 신체활동 모두에 초점</b>을 맞춰 기능을 고민하고 구현했습니다.

<br/>


## 💁‍♀️ 기술 스택 및 개발 환경
2인으로 구성된 팀 두루두루에서 만든 서비스로 프론트엔드 모든 기능을 직접 구현하였습니다. 

<b>스택</b>
- React
- JavaScript, HTML5, CSS3
- Vercel
  
<b>환경</b>
- Visual Studio Code
- Git, Github

<br/>


## 💁‍♀️ 기능 설명 

### 1. 메인화면 - 하루 기록하기
- 노인이 대부분인 치매환자의 연령층에 맞춰 크고 직관적인 UI로 구성했습니다.
- 로그인은 카카오 api를 활용하여 카카오톡 간편 로그인으로 진행됩니다.
- 치매 환자 스스로 특정 시간마다 자신의 활동을 되짚어보고 기록하며 인지기능을 촉진시킵니다.
  
  <img src="https://github.com/FutureandKim/holden_frontend/assets/95979743/b376036e-b6d7-46f8-ac02-eef833345fdd" width="450"/>

### 2. 하루 돌아보기
- 기록한 일상은 하루 돌아보기 페이지에서 확인할 수 있습니다.
- 다른 날의 기록도 전부 확인이 가능합니다.

  <img src="https://github.com/FutureandKim/holden_frontend/assets/95979743/a919ed02-d379-4959-aed2-1e96363b1295" width="450"/>

### 3. 하루 스트레칭
- 치매환자의 부족한 신체운동과 인지운동을 함께 할 수 있는 서비스입니다.
- 3가지의 스트레칭 동작을 랜덤으로 5초간 보여주고, 웹캠을 통해 사용자는 본인의 모습을 보며 스트레칭 동작을 기억해서 따라합니다.
- 기억나지 않으면 다시 재생할 수 있습니다.
- 웹캠은 `react-webcam` 라이브러리를 설치해 사용하였고, 라이브러리 특성상 화면이 반전된 채 출력되기 때문에 `div`로 감싸고 `transform: 'scaleX(-1)'` 스타일을 적용하여 해결했습니다.

  <img src="https://github.com/FutureandKim/holden_frontend/assets/95979743/0b717f28-b936-4c13-94bb-e1ed29f9c564" width="450"/>

 ### 4. 하루 퀴즈풀이
 - 치매환자의 기억력 운동을 위해 오늘 하루 기록을 바탕으로 3지 선다형 문제를 출제합니다.

   <img src="https://github.com/FutureandKim/holden_frontend/assets/95979743/87db4f8a-7b23-4cb0-bf9d-89d3c374216e" width="450"/>

<br/>

## 💁‍♀️ 시스템 아키텍처
<img src="https://github.com/FutureandKim/holden_frontend/assets/95979743/6a6c2016-407a-4208-9073-2891ffd7a4e2" width="700"/>

<br/>

## 💁‍♀️ 기대 효과
- 퀴즈, 스트레칭, 하루 기록 등을 통해 치매환자의 뇌를 자극해줍니다.
- 간단한 게임 형식의 운동으로 적극적인 참여가 가능하며 사용자들은 보상감을 느낄 수 있습니다.
- 치매 환자들이 잘 하지 않는 몸을 움직이는 활동(스트레칭)을 매일 할 수 있습니다.
- 하루 기록으로 지난 기억들을 되돌아볼 수 있으며 더 나아가 식단, 행동 패턴을 파악할 수 있습니다.
- 사소한 기억일지라도 한번 더 떠올리면서 치매환자의 기억력에 도움이 됩니다. 

<br/>
 
## 💁‍♀️ 기타사항
- 한국외국어대학교 2024 HUFSummerHackerton 우수상 수상
