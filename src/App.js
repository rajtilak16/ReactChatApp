import {ChatEngine} from "react-chat-engine"
import './App.css';
import LoginForm from './components/LoginForm'
import ChatFeed from './components/ChatFeed';

 
   const projectID = "Enter your id here from chatengine.io"
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
