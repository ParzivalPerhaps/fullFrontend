import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { User } from "../models/user";
import * as UserApi from "../network/user_api"

interface DashboardLoggedInViewProps {
    loggedInUser: User | null
}

const DashboardLoggedInView = (props: DashboardLoggedInViewProps) => {

    return ( 
        
        
            <>
            
            
            <Container>

            <Row xs={1} md={2} lg={3} className="g-4">
            <h2 style={{marginTop:"11rem", inlineSize:"40rem", fontSize:36}}>Hi {props.loggedInUser?.username}!</h2>
                <Col>
                    <Card style={{ width: '26rem', height:"9rem", marginTop: "5rem", backgroundColor: "#373E40", color: "#E0FBFC" }}>
                        <Card.Body>
                            <Card.Title>Highest Performance Category</Card.Title>
                            <Card.Header><p style={{fontFamily:"Baron", color:"#2DD881", fontSize:25, textAlign:"center"}}>Social Science</p></Card.Header>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row xs={1} md={2} lg={3} className="g-4">
                <Col>
                    <Card style={{ width: '39rem', height:"19rem", marginTop: "2rem", backgroundColor: "#373E40", color: "#E0FBFC" }}>
                        <Card.Body>
                            <Card.Title>Questions Answered Correctly</Card.Title>
                            <Card.Header></Card.Header>
                            <Card.Text><p style={{fontFamily:"Baron", color:"#2DD881", fontSize:130, textAlign:"center"}}>72</p></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '26rem', height:"9rem", marginLeft:"13rem", marginTop: "2rem", backgroundColor: "#373E40", color: "#E0FBFC" }}>
                        <Card.Body>
                            <Card.Title>Lowest Performance Category</Card.Title>
                            <Card.Header><p style={{fontFamily:"Baron", color:"#CD533B", fontSize:25, textAlign:"center"}}>Literature</p></Card.Header>
                            <Card.Text></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '26rem', height:"9rem", marginLeft:"-14rem", marginTop: "12rem", backgroundColor: "#373E40", color: "#E0FBFC" }}>
                        <Card.Body>
                            <Card.Title>Category Of The Day</Card.Title>
                            <Card.Header><p style={{fontFamily:"Baron", color:"#E3B505", fontSize:25, textAlign:"center"}}>Economics</p></Card.Header>
                            <Card.Text></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                
            </Row>
            <Row xs={1} md={2} lg={3} className="g-4">
                <Col>
                    <Card style={{ width: '66rem', height:"10rem", marginTop: "1rem", backgroundColor: "#373E40", color: "#E0FBFC" }}>
                        <Card.Body>
                            <Card.Title>Motivational Quote (more features coming soon!)</Card.Title>
                            <Card.Header></Card.Header>
                            <Card.Text><p style={{fontFamily:"Baron", color:"#2DD881", fontSize:50, textAlign:"center"}}>I Believe In You</p></Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container></>
     );
}
 
export default DashboardLoggedInView;