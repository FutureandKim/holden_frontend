import './App.css';
import DefaultRouter from './Router';
import { requestForToken, onMessageListener } from './firebase'; // firebase.js 파일의 위치에 맞게 경로를 수정
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // 사용자 로그인 후 또는 컴포넌트 마운트 시 FCM 토큰 요청
    requestForToken();
  }, []);

  useEffect(() => {
    onMessageListener()
      .then((payload) => {
        console.log('Message received. ', payload);
        // 추가적으로 알림을 처리하는 로직을 작성합니다.
      })
      .catch((err) => console.log('failed: ', err));
  }, []);

  return (
    <div className='App'>
      <DefaultRouter />
    </div>
  );
}

export default App;
