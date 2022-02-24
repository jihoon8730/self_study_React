/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집','빙다리 핫바지']);
  let [따봉, 따봉변경] = useState(0);
  let [누른제목, 누른제목변경] = useState(0);

  let [입력값, 입력값변경] = useState('');
  
  // UI의 상태 보이기 / 숨기기 등
  let [modalShow, modal변경] = useState(false);


  // function 제목바꾸기(){
  //   let newArray = [...글제목];
  //   newArray[0] = '여자코트 추천';
  //   글제목변경( newArray );
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
       {/* 2월24일 */}
      {/* map for문 */}
      { 
        글제목.map(function(글, i){
          return (
          <div className='list' key={i}>
            <h3 onClick={()=>{누른제목변경(i)}}> { 글 } <span onClick={()=>{ 따봉변경(따봉 + 1) } }>👍</span> {따봉} </h3>
            <p>2월 22일 발행</p>
            <hr/>
          </div>
          )
        })
      }

      {/* input 다루기 2월 24일 */}
      <input onChange={ (e)=>{ 입력값변경(e.target.value) } } />

      <button onClick={ () => {modal변경(!modalShow)}}>열기 / 닫기</button>
      {/* <button onClick={()=>{누른제목변경(0)}}>버튼1</button>
      <button onClick={()=>{누른제목변경(1)}}>버튼2</button>
      <button onClick={()=>{누른제목변경(2)}}>버튼3</button> */}

      {/* 삼항연산자 if문 */}
      {
        modalShow === true
        ? <Modal 글제목={글제목} 누른제목={누른제목} />
        : null
      }

      {/* props 전송 사용법 2월 24일 */}
      {/* 1. <자식컴포넌트 전송할이름 ={state명}
          2. 자식컴포넌트 선언하는 function 안에 피라미터를 하나 만듬 */}
    </div>
  );
}
function Modal(props) {
  return (
    <div className='modal'>
      <h2>
        제목 { props.글제목[props.누른제목] }
      </h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
