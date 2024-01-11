import { Navbar, Nav, Button } from "react-bootstrap";
import { User } from "../models/user";
import * as UserApi from "../network/user_api"

interface NavBarLoggedInViewProps {
    user: User,
    onLogoutSuccessful: () => void
}


const NavBarLoggedInView = ({user, onLogoutSuccessful} : NavBarLoggedInViewProps) => {
    async function logout() {
        try {
            await UserApi.logout();
            onLogoutSuccessful();            
        } catch (error) {
            alert(error);
            console.log(error);
        }
    }

    return ( 
        <>
            <Navbar.Collapse id="basic-navbar-nav">
                    
                <Nav className="me-auto">
                    <Nav.Link href="/dashboard" className="navbarText" style={{marginRight:"1rem"}}>Dashboard</Nav.Link>
                    <Nav.Link href="/quizzes" className="navbarText" style={{marginRight:"34rem"}}>Quizzes</Nav.Link>
                </Nav>
                </Navbar.Collapse>

                <Navbar.Collapse className="justify-content-end" style={{color: "#E0FBFC", marginLeft: "3rem"}}>
                <Navbar.Text className="navbarText">
                    Signed in as: {user.username}
                </Navbar.Text>
                
                </Navbar.Collapse>
                <Button style={{marginLeft:"3rem", color:"#E0FBFC", background:"#373E40"}} onClick={logout}>Logout</Button>

        </>

     );
}
 
export default NavBarLoggedInView;