import './App.css';
import { useState } from 'react';

/**
 * 동적 UI를 만드는 법(모달창 만들기)
 * : 유저가 조작시 형태가 바뀌는 모달창, 탭, 서브메뉴, 툴팁, 경고문
 * 
 * 순서
 * 1.html과 css로 ui디자인하기
 * 2. ui의 현재 상태를 state에 저장
 * 3. state에 따라 ui가 어떻게 보일지 조건문 등으로 작성
 */

function App() {
  const [count, setCount] = useState([0,0,0]);
  const [title, setTitle] = useState(['얌샘김밥', '초밥', "JIMMY JOHN'S"]);
  const [modal, setModal] = useState(false)
  const [modalIndex, setModalIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="App">
      <h2>FOODIE SPOT</h2>
      {
        title.map( function(v, i) {
          return(        
            <div className='list'>
            <h4 onClick={function() {setModal(!modal); setModalIndex(i)}}>{title[i]}</h4>
            <p>04월 09일<span onClick={() => {
              let copy = [...count];
              copy[i] = copy[i]+1;
              setCount(copy)
              }}>🎁</span>{count[i]}</p>
            </div>)
        })
      }
      
      <input onChange={(e) => {setInputValue(e.target.value)}}/>
      {modal ? <Modal title={title} setTitle={setTitle}
      modalIndex={modalIndex} inputValue={inputValue}/> : null}

    </div>
  );
}

function Modal({ title, setTitle, modalIndex, inputValue }) {
  return (
    <div className='modal'>
      <h4>제목 : {title[modalIndex]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
          let copy = [...title];
          copy[modalIndex] = inputValue;
          setTitle(copy);
        }}>글 수정</button>
    </div>
  );
}


export default App;
