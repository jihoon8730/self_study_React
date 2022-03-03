/* eslint-disable*/

import React, {useContext, useState, lazy, Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Navbar, NavDropdown, Nav, Jumbotron } from 'react-bootstrap';
import Data from './data.js';
// import Detail from './Detail.js';
let Detail = lazy(()=> import('./Detail.js') );
import axios from 'axios';

import {Link,Route,Switch} from 'react-router-dom';

import Cart from './cart.js';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

// context API 2월 3월1일
// 1. React.createContext()로 범위생성
// 2. 같은 값을 공유할 HTML을 <범위>로 싸매기
// 3.useContext(범위)로 공유된 값 사용하기
export let 재고context = React.createContext();

function App() {

  let [shoes, shoes변경] = useState(Data);
  let [재고, 재고변경] = useState([10,11,12]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Route (라우트) 방법 2월 26일 */}
      <Switch>

        <Route exact path="/">
          <Jumbotron className="background">
            <h1>Season Off!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">button</Button>
            </p>
          </Jumbotron>

          <div className='container'>

            {/* context API 2월 3월1일 */}
            {/* 같은 값을 공유할 HTML을 <범위>로 싸매기 */}
            <재고context.Provider value={재고}>

            <div className='row'>
            {
              shoes.map((a, i) => {
                  return <Card shoes={shoes[i]} i={i} key={i} />
                }
              )
            }
            </div>

            </재고context.Provider>

            {/* axios get요청 2월 28일 */}
            <button className='btn btn-primary' onClick={()=>{

              axios.post('서버URL',{id:'codingapple',pw:1234});

              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result) => {
                console.log(result.data);
                shoes변경([...shoes, ...result.data]);
              })
              .catch(()=>{ 
                console.log('실패했어요')
              })

            }}>더보기</button>
          </div>
        </Route>

        <Route path="/detail/:id">
        <재고context.Provider>
          <Suspense fallback={<div>로딩중이에요</div>}>
          <Detail shoes={shoes} 재고={재고} 재고변경={재고변경}/>
          </Suspense>
        </재고context.Provider>
        </Route>

        <Route path="/cart">
          <Cart></Cart>
        </Route>
        

        {/* <Route path='/어쩌구' component={Modal}></Route>*/}

        <Route path="/:id">
          <div>아무거나적었을때 이거 보여주셈</div>
        </Route>

      </Switch>

      
    </div>
  );
}

// Component화
function Card (props) {

  let 재고 = useContext(재고context);
  let history = useHistory();

  return (
    <div className='col-md-4' onClick={ () => { history.push('/detail/' + props.shoes.id) }}>
      <img src={ 'https://codingapple1.github.io/shop/shoes'+ (props.i +1) +'.jpg' } width='100%' />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>$ {props.shoes.price}</p>
      <Test></Test>
      
    </div>
  )
}
function Test(){
  // 3.useContext(범위)로 공유된 값 사용하기
  let 재고 = useContext(재고context);
  return <p>{재고[0]}</p>
}

// props 문법 한번더 2월 28일
// 1. 보낼이름 ={start이름}
// 2. 하위컴포넌트에선{props.보낸이름}



export default App;
// 2월 25일 숙제
// 1. 오늘 만들었던 상품리스트를 이번엔 <컴포넌트>로 만들어서 첨부해보세요

// 2. <컴포넌트>에 실제 상품명이 뜨도록 {데이터바인딩} 완료해보십시오. <컴포넌트>3개가 필요하겠군요. 

// 3. 컴포넌트 3개를 map 반복문을 돌려봅시다
