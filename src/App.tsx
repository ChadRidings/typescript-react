import { UserContextProvider } from './providers/UserContextProvider';
import User from './components/User';

function App() {

  return (
    <UserContextProvider>
      <User />
    </UserContextProvider>
  )
}

export default App
