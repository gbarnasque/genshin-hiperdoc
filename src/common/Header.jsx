import React from 'react';
import Navbar from 'react-bootstrap/Navbar';


import  GenshinLogo from '../images/Genshin_Impact_logo.png'
import './Header.css';

class Header extends React.Component {

    returnToMain() {
        document.location.href = '#o-que-e-genshin-impact';
        document.location.reload(true);
    }

    render() {
        return (
            <header className='main-header'>
                <Navbar>
                    <Navbar.Brand onClick={this.returnToMain} href='#o-que-e-genshin-impact' className='m-auto'><img width='278' src={GenshinLogo} alt='Genshin Impact'/></Navbar.Brand>
                </Navbar>
            </header>
        );
    }
}


export default Header;