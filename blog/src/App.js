/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집','빙다리 핫바지']);
  let [따봉, 따봉변경] = useState(0);
  
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
      <div className="list">
        <h3> { 글제목[0] } <span onClick={()=>{ 따봉변경(따봉 + 1) } }>👍</span> {따봉} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { 글제목[1] } </h3>
        <p>2월 22일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { 글제목[2] } </h3>
        <p>2월 22일 발행</p>
        <hr/>
      </div>
      <button onClick = { () => {modal변경(true)}}>열기 / 닫기</button>

      {/* 삼항연산자 if문 */}
      {
        modalShow === true
        ? <Modal />
        : null
      }

    </div>
  );
}
function Modal() {
  return (
    <div className='modal'>
      <h2>
        제목
      </h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
