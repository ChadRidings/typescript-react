import { UserContextProvider } from './providers/UserContextProvider';
import User from './components/User';
import './App.css';

function App() {

  return (
    <UserContextProvider>
      <User />
    </UserContextProvider>
  )
}

export default App
