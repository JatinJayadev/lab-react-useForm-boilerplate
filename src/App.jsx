
import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const form = useForm()

  return (
    <>
      <form>
        <label htmlFor="username">UserName</label>
        <input type="text" id='username' />

        <label htmlFor="email">Email</label>
        <input type="email" id='email' />

        <label htmlFor="channel">Channel</label>
        <input type="text" id='channel' />

        <button>Submit</button>
      </form>
    </>
  )
}

export default App
