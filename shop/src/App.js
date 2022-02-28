/* eslint-disable*/

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Navbar, NavDropdown, Nav, Jumbotron } from 'react-bootstrap';
import Data from './data.js';
import Detail from './Detail.js'

import {Link,Route,Switch} from 'react-router-dom';

function App() {
  let [shoes, shoes변경] = useState(Data);

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
            <div className='row'>
            {
              shoes.map((a, i) => {
                  return <Card shoes={shoes[i]} i={i} key={i}/>
                }
              )
            }

            </div>
          </div>
        </Route>

        <Route path="/detail/:id">
          <Detail shoes={shoes}/>
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
  return (
    <div className='col-md-4'>
      <img src={ 'https://codingapple1.github.io/shop/shoes'+ (props.i +1) +'.jpg' } width='100%' />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>$ {props.shoes.price}</p>
    </div>
  )
}

// props 문법 한번더 2월 28일
// 1. 보낼이름 ={start이름}
// 2. 하위컴포넌트에선{props.보낸이름}



export default App;
// 2월 25일 숙제
// 1. 오늘 만들었던 상품리스트를 이번엔 <컴포넌트>로 만들어서 첨부해보세요

// 2. <컴포넌트>에 실제 상품명이 뜨도록 {데이터바인딩} 완료해보십시오. <컴포넌트>3개가 필요하겠군요. 

// 3. 컴포넌트 3개를 map 반복문을 돌려봅시다
