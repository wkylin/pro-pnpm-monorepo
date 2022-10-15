import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { User, greetUser } from "@demo/shared"
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const user: User = {
    firstName: "Client",
    lastName: "User",
    email: "clientuser@test.com",
    isAdmin: false,
  };

  const onGreetClicked = () => {
    greetUser(user);
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <h1>Client App</h1>
        <button onClick={onGreetClicked}>Greet Client!</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
