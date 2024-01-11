import { Card, Col, Container, Row } from "react-bootstrap";

const HomePage = () => {
    return ( 
        <>
            <h1 style={{fontFamily:"Baron", color:"#E0FBFC", fontSize:120, marginTop:"1rem"}}>HUGO</h1>
            <h2 style={{fontSize:35}}>AI-Powered Practice for Academic Decathlon</h2>

            <Container>

                <Row xs={1} md={2} lg={3} className="g-4">
                    <Col>
                        <Card style={{ width: '26rem', height:"10rem", marginTop: "5rem", backgroundColor: "#373E40", color: "#E0FBFC" }}>
                            <Card.Body>
                                <Card.Title>Practice Multiple Choice</Card.Title>
                                <Card.Header></Card.Header>
                                <Card.Text><p style={{fontFamily:"Baron", color:"#2DD881", fontSize:25, textAlign:"center"}}>Over 700 questions available</p></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '26rem', height:"10rem", marginTop: "5rem", backgroundColor: "#373E40", color: "#E0FBFC" }}>
                            <Card.Body>
                                <Card.Title>AI Powered Speech Practice</Card.Title>
                                <Card.Header></Card.Header>
                                <Card.Text><p style={{fontFamily:"Baron", color:"#2DD881", fontSize:25, textAlign:"center"}}>Perfect your speech with the help of Ai</p></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '26rem', height:"10rem", marginTop: "5rem", backgroundColor: "#373E40", color: "#E0FBFC" }}>
                            <Card.Body>
                                <Card.Title>Interview Practice</Card.Title>
                                <Card.Header></Card.Header>
                                <Card.Text><p style={{fontFamily:"Baron", color:"#2DD881", fontSize:25, textAlign:"center"}}>Interview questions to prepare you</p></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
     );
}
 
export default HomePage;