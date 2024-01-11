/* eslint-disable eqeqeq */
import styles from "../styles/Question.module.css"
import { Accordion, Button, ButtonGroup, Card, Col, Container, Row } from "react-bootstrap";
import { Question as QuestionModel } from "../models/question";
import { useEffect, useState } from "react";

interface QuestionProps {
    question: QuestionModel;
    liveCorrections: Boolean;
    currentQuestionCount: Number;
    showPageNum: Boolean;
    onAnsOneClick: () => void;
    onAnsTwoClick: () => void;
    onAnsThreeClick: () => void;
    onAnsFourClick: () => void;
    onAnsFiveClick: () => void;
    onSubmitClick: (correct:boolean) => void;
    onNextQuestionClick: () => void;
}

const Question = ({question, onAnsFiveClick, onAnsFourClick, onAnsOneClick, onAnsThreeClick, onAnsTwoClick, onSubmitClick, onNextQuestionClick, liveCorrections, currentQuestionCount, showPageNum}: QuestionProps) => {
    const [ans, setAns] = useState<Number>(-1);
    const [correctAns, setCorrectAns] = useState<Number>(-1);

    const answerArr = ["A", "B", "C", "D", "E"];

    return (
        <>
            <p style={{padding:"0rem", marginLeft:"57rem", color:"#E0FBFC", fontFamily:"GothamMedium", marginTop:"0.2rem"}}>{currentQuestionCount + " Questions Remaining"} </p>
            <div>
                <h1 className={styles.questionHeadText}>
                    {question.question} 
                </h1>
                
                {question.pageNumberStart != 0 && showPageNum && <h2 className={styles.questionHeadText}>
                    Page {(question.pageNumberEnd == question.pageNumberStart) ? question.pageNumberStart?.toString(): question.pageNumberStart?.toString() + " - " + question.pageNumberEnd?.toString() } - Social Sci.
                </h2>
                }
                
            </div>
            

            <Container>
                <Row xs={1} md={2} lg={3} className="g-4">
                    <Col className={styles.questionColumn}>
                        <Card className={(liveCorrections) ? (correctAns == -1) ? (ans === 0 ? styles.questionCardChosen : styles.questionCard) : (correctAns == 0 ? styles.questionCardCorrect : ans == 0 ? styles.questionCardIncorrect : styles.questionCard) : (ans === 0 ? styles.questionCardChosen : styles.questionCard)} onClick={() => {onAnsOneClick(); if (correctAns == -1) setAns(0)}} id="card0">
                            <Card.Body >
                                <Card.Title>A</Card.Title>
                                
                                    <Card.Text className={styles.questionText}>
                                    {question.answerChoiceA}
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                

                    <Col className={styles.questionColumn}>
                        <Card className={(liveCorrections) ? (correctAns == -1) ? (ans === 1 ? styles.questionCardChosen : styles.questionCard) : (correctAns == 1 ? styles.questionCardCorrect : ans == 1 ? styles.questionCardIncorrect : styles.questionCard) : (ans === 1 ? styles.questionCardChosen : styles.questionCard)} onClick={() => {onAnsTwoClick(); if (correctAns == -1) setAns(1)}} id="card1">
                            <Card.Body>
                                <Card.Title>B</Card.Title>
                                <Card.Text className={styles.questionText}>
                                    {question.answerChoiceB}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    

                    <Col className={styles.questionColumn}>
                        <Card className={(liveCorrections) ? (correctAns == -1) ? (ans === 2 ? styles.questionCardChosen : styles.questionCard) : (correctAns == 2 ? styles.questionCardCorrect : ans == 2 ? styles.questionCardIncorrect : styles.questionCard) : (ans === 2 ? styles.questionCardChosen : styles.questionCard)} onClick={() => {onAnsThreeClick(); if (correctAns == -1) setAns(2)}} id="card2">
                            <Card.Body>
                                <Card.Title>C</Card.Title>
                                <Card.Text className={styles.questionText}>
                                {question.answerChoiceC}
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card className={(liveCorrections) ? (correctAns == -1) ? (ans === 4 ? styles.questionCardChosen : styles.questionCard) : (correctAns == 4 ? styles.questionCardCorrect : ans == 4 ? styles.questionCardIncorrect : styles.questionCard) : (ans === 4 ? styles.questionCardChosen : styles.questionCard)} style={{marginTop:"2rem"}} onClick={() => {onAnsFourClick(); if (correctAns == -1) setAns(4)}} id="card4">
                            <Card.Body>
                                <Card.Title>E</Card.Title>
                                <Card.Text className={styles.questionText}>
                                {question.answerChoiceE}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    

                    <Col className={styles.questionColumn}>
                        <Card className={(liveCorrections) ? (correctAns == -1) ? (ans === 3 ? styles.questionCardChosen : styles.questionCard) : (correctAns == 3 ? styles.questionCardCorrect : ans == 3 ? styles.questionCardIncorrect : styles.questionCard) : (ans === 3 ? styles.questionCardChosen : styles.questionCard)} onClick={() => {onAnsOneClick(); if (correctAns == -1) setAns(3)}} id="card3">
                            <Card.Body>
                                <Card.Title>D</Card.Title>
                                <Card.Text className={styles.questionText}>
                                {question.answerChoiceD}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col className={styles.questionColumn}>
                        
                    </Col>
                </Row>
            </Container>

            <Button className={styles.questionSubmitButton} onClick={() => {
                console.log(ans);
                console.log(question.correctAnswer === ans);
                
                
                
                onSubmitClick(ans === question.correctAnswer); setCorrectAns(question.correctAnswer)}}>
                Submit Answer
            </Button>

            <Button className={styles.questionSubmitButton} style={{marginLeft:"6rem"}} onClick={() => {
                onNextQuestionClick();

                setCorrectAns(-1);
                setAns(-1);
                
            }}>
                Next Question 
            </Button>
        </>
        
      );
};

export default Question;