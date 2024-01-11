import { useEffect, useState } from "react";
import { Spinner, Toast } from "react-bootstrap";
import { Question as QuestionModel } from '../models/question';
import Question from "./Question";
import * as UserApi from "../network/user_api";
import { User } from "../models/user";

interface QuestionPageLoggedInProps {
  user : User,
  category: string,
  questionCount: number,
  liveCorrections: Boolean,
  showPageNum: Boolean,
}

const QuestionPageLoggedInView = (props : QuestionPageLoggedInProps) => {
    const [question, setQuestion] = useState<QuestionModel>({
        "question": "LOADING QUESTION",
        "answerChoiceA": "ANSWER A",
        "answerChoiceB": "ANSWER B",
        "answerChoiceC": "ANSWER C",
        "answerChoiceD": "ANSWER D",
        "answerChoiceE": "ANSWER E",
        "correctAnswer": 1,
        "pageNumberStart": 20,
        "pageNumberEnd": 20
      });
    
      const [questionLoading, setQuestionLoading] = useState(true);
      const [showQuestionLoadingError, setShowQuestionLoadingError] = useState(false);
      const [chosenAnswer, setChosenAnswer] = useState(-1);
      const [answered, setAnswered] = useState(false);
      const [questionPosition, setQuestionPosition] = useState(0);

      const [correctAnswers, setCorrectAnswers] = useState(0);

      const [quizComplete, setQuizComplete] = useState(false);
      const[questions, setQuestions] = useState<QuestionModel[]>([
        
      ]);

 
    async function loadQuestion(){
      try {
        setShowQuestionLoadingError(false);
        setQuestionLoading(true);

        let questionArray: string | any[] | ((prevState: QuestionModel[]) => QuestionModel[]) = [];

        for (let index = 0; index < props.questionCount; index++) {
          let response = await fetch("/api/questions/" + props.category + "/random", {method: "GET"});

          let q = await response.json();

          if (questionArray.includes(q)){
            response = await fetch("/api/questions/" + props.category + "/random", {method: "GET"});

            q = await response.json();
          }
          
          questionArray[index] = q;
        }
        
        setQuestions(questionArray);
        console.log(questionArray);
        
        setQuestion(questionArray[0]);
        setAnswered(false);
      } catch (error) {
        console.log(error);
        alert(error)
        setShowQuestionLoadingError(true);
      } finally {
        setQuestionLoading(false);
      }
      
    }
      
  useEffect(() => {
    loadQuestion();
  }, []);

  const errorToast = <Toast>
                      <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                        <strong className="me-auto">Hugo Training Platform</strong>
                      </Toast.Header>
                      <Toast.Body>Something went wrong! Please try refreshing the page</Toast.Body>
                    </Toast>

    return ( 
        <>
            {questionLoading && <Spinner animation='grow' variant='primary' style={{marginTop:"30%", backgroundColor:"#488286"}}></Spinner>}
            {showQuestionLoadingError && errorToast}
            {!questionLoading && !showQuestionLoadingError && !quizComplete && <Question 
            question={questions[questionPosition]}
            liveCorrections={props.liveCorrections}
            currentQuestionCount={props.questionCount - questionPosition}
            showPageNum={props.showPageNum}
            onAnsOneClick={() => {setChosenAnswer(0)}}
            onAnsTwoClick={() => {setChosenAnswer(1)}}
            onAnsThreeClick={() => {setChosenAnswer(2)}}
            onAnsFourClick={() => {setChosenAnswer(3)}}
            onAnsFiveClick={() => {setChosenAnswer(4)}}
            onSubmitClick={(isCorrect: boolean) => {
              if (answered) return;

              setAnswered(true);
              

              if (isCorrect){
                console.log("Correct ans");
                
                setCorrectAnswers(correctAnswers + 1);

                UserApi.setStat({
                  username: props.user.username,
                  newValue: 1,
                  stat: props.category
                })
              }else{
                UserApi.setStat({
                  username: props.user.username,
                  newValue: 0,
                  stat: props.category
                })
              }

            }}
            onNextQuestionClick={()=> {
              
              setQuestionPosition(questionPosition + 1);
              
              if (questionPosition === props.questionCount - 1){
                setQuizComplete(true);
              }else{
                setAnswered(false);
                
                
                setQuestion(questions[questionPosition + 1]);
              }
            }}
          
            ></Question>}

            {quizComplete && 
              
              <div>
                <h1 style={{fontFamily:"Baron", color:"#E0FBFC"}}>Quiz Complete!</h1>
                <h2 style={{color:"#E0FBFC"}}>Great Work</h2>
                <h1 style={{marginTop:"9rem", color:"#E0FBFC", fontFamily:"Baron"}}>{correctAnswers + " Correct out of " + props.questionCount}</h1>
                <h1 style={{marginTop:"1rem", color:"#E0FBFC", fontFamily:"Baron"}}>In a competition that would be</h1>
                <h2 style={{fontSize:70, color:"#2dc768"}}>{(correctAnswers/props.questionCount) * 1000}</h2>
              </div>
              
            }
        </>
        
     );
}
 
export default QuestionPageLoggedInView;