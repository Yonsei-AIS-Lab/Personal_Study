import React from 'react';
import '../style/Header.css';
import {Link} from 'react-router-dom';  

const MenuItem = ({active, children, to}) => (
    <Link to={to} className="menu-item">
            {children}
    </Link>
)

const Header = () => {
    return (
        <div>
            <div className='menu'>
                <div className="logo">
                    QR Platform
                </div>
                <div className='up_menu'>
                    <MenuItem to={'/login'}>로그인</MenuItem>
                    <MenuItem to={'/join'}>회원가입</MenuItem>
                </div>
            </div>
            <div className="menu">
                <MenuItem to={'/'}>홈</MenuItem>
                <MenuItem to={'/customer'}>고객</MenuItem>
                <MenuItem to={'/company'}>기업</MenuItem>
                <MenuItem to={'/manage'}>관리자</MenuItem>
                <MenuItem to={'/mypage'}>내정보</MenuItem>
            </div>
        </div>
    );
};



export default Header;