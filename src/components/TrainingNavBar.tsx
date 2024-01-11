import { Container, Nav, Navbar } from "react-bootstrap";
import { User } from "../models/user";
import NavBarLoggedInView from "./NavBarLoggedInView";
import NavBarLoggedOutView from "./NavBarLoggedOutView";

interface NavBarProps {
    loggedInUser: User | null,
    onSignUpClicked: () => void,
    onLoginClicked: () => void,
    onLogoutSuccessful: () => void,
}

const NavBar = ({loggedInUser, onSignUpClicked, onLoginClicked, onLogoutSuccessful} : NavBarProps) => {
    return ( 
        <Navbar expand="lg" sticky="top" style={{backgroundColor:"#373E40"}} >
            <Container style={{backgroundColor:"#373E40"}}>
                <Navbar.Brand href="/"><img src="logo86.png" alt="HUGO"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {loggedInUser 
                                ? <NavBarLoggedInView
                                    user={loggedInUser}
                                    onLogoutSuccessful={onLogoutSuccessful}
                                
                                /> : 
                                <NavBarLoggedOutView
                                    onSignupClicked={onSignUpClicked}
                                    onLoginClicked={onLoginClicked}
                                />
                            }
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>

     );
}
 
export default NavBar;