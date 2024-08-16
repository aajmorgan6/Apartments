import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="">
      <Container>
        {/* <Navbar.Brand>Apartment Findr</Navbar.Brand> */}
        <Navbar.Collapse className="justify-content-center ">
          <Navbar.Text className='fs-2 fw-bold'>
            Apartment Findr
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;