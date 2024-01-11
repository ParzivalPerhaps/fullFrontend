import { useState } from "react";
import { Button, ButtonGroup, ButtonToolbar, Card, CardSubtitle, Form, ToggleButton } from "react-bootstrap";
import { User } from "../models/user";
import QuestionPageLoggedInView from "./QuestionPageLoggedInView";

interface QuizzesLoggedInProps {
    loggedInUser: User
}

const QuizzesLoggedInView = (props : QuizzesLoggedInProps) => {
    const [liveCorrections, setliveCorrections] = useState(false);
    const [showPageNum, setShowPageNum] = useState(false);
    const [questionCount, setQuestionCount] = useState(25);
    const [category, setCategory] = useState(1);

    const categories = ["socialScience", "science", "econ", "lit", "music", "art", "math"];

    let questionUi = <div>
        <QuestionPageLoggedInView 
            user={props.loggedInUser}
            category={categories[category - 1]}
            questionCount={questionCount} 
            liveCorrections={liveCorrections}      
            showPageNum={showPageNum}      
        />
    </div>

    const [setupActive, setSetupActive] = useState(true);
  
    const setupUi = <div>
    <h1 style={{color:"#E0FBFC", fontFamily:"Baron"}}>Practice</h1>
    <Card style={{backgroundColor:"#373E40", height:"6rem", width:"50%", marginLeft:"20rem", marginTop:"6rem", paddingTop:"0.3rem"}}>
        <Card.Title style={{color:"#E0FBFC", fontFamily:"GothamMedium"}}>Live Corrections</Card.Title>
        <ButtonGroup className="mb-2" style={{marginTop:"0.3rem", height:"2.4rem", width:"30rem", marginLeft:"6rem"}}>
        <ToggleButton
        id="toggle-check"
        type="checkbox"
        variant="outline-success"
        checked={liveCorrections}
        value="1"
        onChange={(e) => setliveCorrections(e.currentTarget.checked)}
        >
        <p style={{fontFamily:"GothamMedium"}}>Live Corrections</p>
        </ToggleButton>

        <ToggleButton
        id="toggle-check2"
        type="checkbox"
        variant="outline-success"
        checked={showPageNum}
        value="2"
        onChange={(e) => setShowPageNum(e.currentTarget.checked)}
        >
        <p style={{fontFamily:"GothamMedium"}}>Show Page Number</p>
        </ToggleButton>
    </ButtonGroup>
    </Card>
    <Card style={{backgroundColor:"#373E40", height:"6rem", width:"50%", marginLeft:"20rem", marginTop:"6rem", paddingTop:"0.3rem"}}>
    <Card.Title style={{color:"#E0FBFC", fontFamily:"GothamMedium"}}>Question Amount</Card.Title>
        <ButtonToolbar aria-label="Toolbar with button groups" style={{marginLeft:"11.5rem", marginTop:"0.3rem"}}>
            <ButtonGroup className="me-2" aria-label="First group">
                <Button onClick={() => {setQuestionCount(5)}} style={{backgroundColor:(questionCount == 5 ? "#305252" : "#373E40"), color: "#E0FBFC"}}>5</Button>
            </ButtonGroup>
            <ButtonGroup className="me-2" aria-label="Second group">
                <Button onClick={() => {setQuestionCount(10)}} style={{backgroundColor:(questionCount == 10 ? "#305252" : "#373E40"), color:"#E0FBFC"}}>10</Button>
            </ButtonGroup>
            <ButtonGroup className="me-2" aria-label="Third group">
                <Button onClick={() => {setQuestionCount(15)}} style={{backgroundColor:(questionCount == 15 ? "#305252" : "#373E40"), color:"#E0FBFC"}}>15</Button>
            </ButtonGroup>
            <ButtonGroup className="me-2" aria-label="Fourth group">
                <Button onClick={() => {setQuestionCount(25)}} style={{backgroundColor:(questionCount == 25 ? "#305252" : "#373E40"), color:"#E0FBFC"}}>25</Button>
            </ButtonGroup>
            <ButtonGroup className="me-2" aria-label="Fifth group">
                <Button onClick={() => {setQuestionCount(35)}} style={{backgroundColor:(questionCount == 35 ? "#305252" : "#373E40"), color:"#E0FBFC"}}>35</Button>
            </ButtonGroup>
            <ButtonGroup className="me-2" aria-label="Sixth group">
                <Button onClick={() => {setQuestionCount(50)}} style={{backgroundColor:(questionCount == 50 ? "#305252" : "#373E40"), color:"#E0FBFC"}}>50</Button>
            </ButtonGroup>
        </ButtonToolbar>
    </Card>

    <Card style={{backgroundColor:"#373E40", height:"6rem", width:"50%", marginLeft:"20rem", marginTop:"6rem", paddingTop:"0.3rem"}}>
        <Card.Title style={{color:"#E0FBFC", fontFamily:"GothamMedium"}}>Test Category</Card.Title>
        <Form.Select aria-label="Select Testing Category" onChange={(value : any) => {setCategory(value.target.value)}} style={{backgroundColor:"#373E40", color:"#E0FBFC", marginTop:"0.3rem", fontFamily:"GothamMedium"}}>
        <option value="1">Select Category</option>
        <option value="1">Social Science</option>
        <option value="2">Science</option>
        <option value="3">Economics</option>
        <option value="4">Literature</option>
        <option value="5">Music</option>
        <option value="6">Art</option>
        <option value="7">Math</option>
        </Form.Select>
        
    </Card>
    <Button onClick={() => {
        if (category !== undefined){
            setSetupActive(false);
        }
        
        
        }} variant="primary" size="lg" style={{width:"50%", marginTop:"7rem", backgroundColor:"#373E40", color:"#E0FBFC", fontFamily:"GothamMedium"}}>
    Start Quiz
    </Button>
</div>
    
    return ( 
        <>
        {setupActive && setupUi}
        {!setupActive && questionUi}
        </>
     );
}
 
export default QuizzesLoggedInView;