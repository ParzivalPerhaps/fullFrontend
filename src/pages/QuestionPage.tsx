import QuestionPageLoggedInView from "../components/QuestionPageLoggedInView";
import QuestionPageLoggedOutView from "../components/QuestionPagedLoggedOutView";
import { User } from "../models/user";

interface QuestionPageProps {
    loggedInUser: User | null,
    category: string
}

const QuestionPage = (props : QuestionPageProps) => {
    return (       
        <>
        {props.loggedInUser ? 
          <QuestionPageLoggedInView 
            user={props.loggedInUser}
            category={props.category} 
            questionCount={0} 
            liveCorrections={false}
            showPageNum={true}          ></QuestionPageLoggedInView> : <QuestionPageLoggedOutView></QuestionPageLoggedOutView>
        }
          
        </> );
}
 
export default QuestionPage;