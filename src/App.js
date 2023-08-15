import {ChatEngine} from "react-chat-engine"
import './App.css';
import LoginForm from './components/LoginForm'
import ChatFeed from './components/ChatFeed';

 
   const projectID = "a509ff92-496d-4be9-9749-ab85ee862ab4"
function App() {
  if(!localStorage.getItem('username')) return <LoginForm/>
  return (
     <ChatEngine
      height = "100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
     />
  );
}

export default App;
