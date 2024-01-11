import { useEffect, useState } from 'react';
import './App.css';
import LoginModal from './components/LoginModal';
import QuestionPageLoggedInView from './components/QuestionPageLoggedInView';
import SignUpModal from './components/SignUpModal';
import TrainingNavBar from './components/TrainingNavBar';
import { User } from './models/user';
import * as UserApi from "./network/user_api"
import QuestionPageLoggedOutView from './components/QuestionPagedLoggedOutView';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import QuestionPage from './pages/QuestionPage';
import NotFoundPage from './pages/NotFoundPage';
import DashboardPage from './pages/DashboardPage';
import QuizzesMenu from './components/QuizzesMenu';
import HomePage from './components/HomePage';

function App() {
  // const [get, set]

  const [loggedInUser, setLoggedInUser] = useState<User|null>(null);

  const [signUpVisible, setSignUpVisibile] = useState(false);
  const [loginVisibile, setLoginVisibile] = useState(false);

  useEffect(() => {
    async function fetchLoggedInUser() {
      try {
        const user = await UserApi.getLoggedInUser();
        setLoggedInUser(user);  
      } catch (error) {
        console.log(error);
      }
    }

    fetchLoggedInUser();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">

        <TrainingNavBar 
        loggedInUser={loggedInUser}
        onLoginClicked={() => {setLoginVisibile(true)}} 
        onSignUpClicked={() => {setSignUpVisibile(true)}} 
        onLogoutSuccessful={() => {setLoggedInUser(null)}} 
        />

        <Container>
          <Routes>
            <Route 
            path="/quizzes"
            element={<QuizzesMenu loggedInUser={loggedInUser}/>}
            />

            <Route 
            path="/"
            element={<HomePage/>}
            />

            {/*
            <Route 
            path="/question"
            element={<QuestionPage loggedInUser={loggedInUser}/>}
            />
            */}
            

            <Route 
            path="/dashboard"
            element={<DashboardPage loggedInUser={loggedInUser}/>}
            />

            <Route
            path="/*"
            element={<NotFoundPage/>}
            />

          </Routes>
        </Container>

        { signUpVisible &&
          <SignUpModal 
            onDismiss={() => {setSignUpVisibile(false)}}
            onSignUpSuccessful={(user) => {setLoggedInUser(user); setSignUpVisibile(false);}}
          />
        }

        { loginVisibile &&
          <LoginModal 
            onDismiss={() => {setLoginVisibile(false)}}
            onLoginSuccessful={(user) => {setLoggedInUser(user); setLoginVisibile(false);}}
          />
        }

        
      
      </div>
    </BrowserRouter>
    
  );
}

export default App;
