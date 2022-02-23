import React, { useContext } from 'react';
import Logo from '../Logo'
import './Header.css'
import SearchInput from './SearchInput'
import APIContext from '../../Contexts/APIContext';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


const Header = () => {
  const { getProducts, searchKeyWord } = useContext(APIContext);
  const breakPoint = 'md';
  return (
    <Navbar expand={breakPoint}>
      <Container fluid>
        <Navbar.Brand href="/marketplace"><Logo /></Navbar.Brand>
        <Navbar.Toggle className="shadow-none p-0 border-0" aria-controls="navbarScroll" />
        <Navbar.Collapse className="flex-column" id="navbarScroll">
          <SearchInput onSearch={(search) => getProducts({ search })} value={searchKeyWord} />
          <Button className={`w-100 d-${breakPoint}-none mt-2 align-self-end`} variant="primary">My Wallet</Button>
        </Navbar.Collapse>
        <Button className={`d-none d-${breakPoint}-block`} variant="primary">My Wallet</Button>
      </Container>
    </Navbar>
  );
}

export default Header;