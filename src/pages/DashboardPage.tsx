import DashboardLoggedInView from "../components/DashboardLoggedInView";
import { User } from "../models/user";

interface DashboardPageProps {
    loggedInUser: User | null
}


const DashboardPage = (props : DashboardPageProps) => {
    return ( 
        <DashboardLoggedInView 
            loggedInUser={props.loggedInUser}
        />
     );
}
 
export default DashboardPage;