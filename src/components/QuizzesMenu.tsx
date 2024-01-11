import { User } from "../models/user";
import QuestionPageLoggedOutView from "./QuestionPagedLoggedOutView";
import QuizzesLoggedInView from "./QuizzesLoggedInView";

interface QuizzesMenuProps {
    loggedInUser: User | null
}

const QuizzesMenu = ({loggedInUser} : QuizzesMenuProps) => {
    return (
        <>
        {loggedInUser ? 
            <QuizzesLoggedInView 
                loggedInUser={loggedInUser}
            />    
            :
            <QuestionPageLoggedOutView/>
            }
        </>
        
     );
}
 
export default QuizzesMenu;