import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <Container>
      <Navbar sticky='top' className=''>
        <Navbar.Brand href='/'>React-Bootstrap</Navbar.Brand>
      </Navbar>
    </Container>
  );
};

export default NavBar;
