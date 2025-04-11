import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';
import pList from './data/ProductList';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Cart from './pages/Cart';
import Detail from './pages/Detail';
import axios from 'axios';

/*  
  * axios (ajax 사용하기) 
    : fetch() 사용할 수 있음. json의 형태로 자동 변경
  
      >  문서 : https://axios-http.com/kr/docs/intro)
          1. 설치부터 시작
*/

function App() {
  const [clothes, setClothes] = useState(pList);
  const [clickCount, setClickCount] = useState(2);

  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Fashion Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart')}}>Cart</Nav.Link>
            <Nav.Link onClick={() => { navigate('/about')}}>About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
            <div className='main-bg'/>     
            <Container>
              <Row>
                {
                  clothes.map((v, i) => {
                      return (
                        <PListCol clothes={v} key={i}/>
                      )
                  })
                }
              </Row>
            </Container>

            <Button variant="outline-warning" onClick={() => {
              axios.get(`https://raw.githubusercontent.com/professorjiwon/data/refs/heads/main/data${clickCount}.json`)
                   .then((result) => {
                      console.log(result);
                      console.log(result.data);
                      setClothes([...clothes, ...result.data])
                      setClickCount(clickCount+1);
                   })
                   .catch(() => {
                      console.log('데이터 가져오기 실패');
                      alert('더이상 상품이 없습니다');
                   })
            }}>서버에서 데이터 가져오기</Button>
          </>
        }/>
        <Route path='/detail/:pid' element={<Detail clothes={clothes}/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/about' element={<div>더조은 컴퓨터 아카데미</div>} />
        <Route path='*' element={<div>없는 페이지 입니다.</div>} />
      </Routes>
    </div>
  );
}

function PListCol({clothes}) {
  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/detail/${clothes.id}`);
  }

  return (
    <Col md={4} onClick={goDetail}>
      <img src = {`${process.env.PUBLIC_URL}/img/clothes${clothes.id}.png`} width="75%"/>
      <h4>{clothes.title}</h4>
      <p>{clothes.price}</p>
    </Col>
  )
}
export default App;
