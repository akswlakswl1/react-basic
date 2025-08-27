import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { Navbar, Offcanvas, Nav, Container } from 'react-bootstrap';

const NavbarArea = ({ auth ,setAuth}) => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성']
    const navigate = useNavigate()
    const gotoLogin = () => {
        if(auth === true){
            setAuth(false)
        }
        else{
            navigate('/login')
        }
    }

    const search = (event) => {
        if (event.key === "Enter") {
            let keyword = event.target.value;
            navigate(`/?q=${keyword}`)
        }
    }
    return (
        <Container>
            <div className='login-button' onClick={() => { gotoLogin() }}>
                <FontAwesomeIcon icon={faUser} />
                <div>{auth === true ? "로그아웃" : "로그인"}</div>
            </div>
            <div className='nav-section' >
                <img width={100} onClick={() => { navigate('/') }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png" alt="none" />
            </div>
            <div className="menu-area">
                <Navbar expand="lg" bg="" className="w-100 p-0">
                    <div className="d-flex align-items-center w-100">
                        {/* 햄버거: 모바일에서만 보이기 */}
                        <Navbar.Toggle
                            aria-controls="off-nav"
                            className="d-lg-none me-2"
                        />

                        {/* 데스크톱 메뉴: lg 이상에서만 보이기 (가운데 정렬) */}
                        <Navbar.Collapse id="desktop-nav" className="mx-auto d-none d-lg-flex">
                            <Nav className="mx-auto">
                                {menuList.map((m, i) => (
                                    <Nav.Link key={i}>{m}</Nav.Link>
                                ))}
                            </Nav>
                        </Navbar.Collapse>

                        {/* 검색: 오른쪽 */}
                        <div className="search-area ms-auto">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <input type="text" onKeyDown={(e) => search(e)} />
                        </div>
                    </div>

                    {/* 모바일 사이드 메뉴: lg 미만에서만 보이기 */}
                    <Navbar.Offcanvas
                        id="off-nav"
                        placement="start"
                        className="d-lg-none"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>메뉴</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="flex-column">
                                {menuList.map((m, i) => (
                                    <Nav.Link key={i}>{m}</Nav.Link>
                                ))}
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Navbar>
            </div>
        </Container>
    )
}

export default NavbarArea