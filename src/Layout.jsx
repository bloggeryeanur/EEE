import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import NavBar from '../src/NavBar'
import Footer from './Footer';

const Layout = () => {
    return ( 
        <Container>
            <NavBar></NavBar> 
            <Outlet>
            </Outlet>
            
            <Footer></Footer>
        </Container>
    );
};

export default Layout;