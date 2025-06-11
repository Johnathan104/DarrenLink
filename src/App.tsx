import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/DarrenLink/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Replace every word with "hello"
    const helloed = input
      .split(/\s+/)
      .filter(Boolean)
      .map(() => 'Nigger')
      .join(' ')
    setOutput(helloed)
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>NiggaLink.AI</h1>
      
      <div className="card">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="soleinput"
            value={input}
            onChange={handleInputChange}
          />
          <input type="submit" value="Submit" />
        </form>
        {output && (
          <div>
            <strong>Output:</strong> {output}
          </div>
        )}
      </div>
      <p className="read-the-docs">
        Click on the submit input in order for darren nijalink droid to respond
      </p>
    </>
  )
}

export default App
