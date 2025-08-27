import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductAll from './page/ProductAll'
import Login from './page/Login'
import ProductDetail from './page/ProductDetail'
import { Routes, Route, Link } from "react-router-dom";
import NavbarArea from './component/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './route/PrivateRoute'

/**
 * 1.전체상품페이지, 로그인, 상품상세페이지
 * 1-1 네이게이션바 만들기
 * 2.전체 상품페이지에서는 전체 상품을 볼 수 있다.
 * 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
 * 4. 상품디테일을 눌렀으나 로그인이 안되어있을 경우에는 로그인 페이지가 먼저 나온다
 * 5. 로그아웃 버튼을 클릭하면 로그아웃이 된다
 * 6. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다, 다시 로그인 페이지가 보인다
 * 7.로그인을하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다
 * 8.
 */

function App() {
  const [auth,setAuth] = useState(false);
  useEffect(()=>{
    console.log("aaa" + auth);
  },[auth]);
  return (
    <div>
      <NavbarArea auth = {auth} setAuth={setAuth}/>
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login auth = {auth} setAuth={setAuth}/>} />
        <Route path="/product/:id" element={<PrivateRoute auth={auth}/>} />
      </Routes>
    </div>
  )
}

export default App
