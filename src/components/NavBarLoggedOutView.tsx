import { Navbar, Nav, Button } from "react-bootstrap";
import { User } from "../models/user";
import * as UserApi from "../network/user_api"

interface NavBarLoggedOutViewProps {
    onSignupClicked: () => void,
    onLoginClicked: () => void
}


const NavBarLoggedOutView = ({onSignupClicked, onLoginClicked} : NavBarLoggedOutViewProps) => {
    return ( 
        <>
            <Navbar.Collapse id="basic-navbar-nav">
                </Navbar.Collapse>

                <Navbar.Collapse className="justify-content-end" style={{color: "#E0FBFC", marginLeft: "3rem"}}>
                
                </Navbar.Collapse>
                <Button onClick={onSignupClicked} style={{marginLeft:"3rem", color:"#E0FBFC", background:"#373E40"}}>Sign Up</Button>
                <Button onClick={onLoginClicked} style={{marginLeft:"3rem", color:"#E0FBFC", background:"#373E40"}}>Log In</Button>

        </>

     );
}
 
export default NavBarLoggedOutView;