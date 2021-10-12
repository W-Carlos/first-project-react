import React from 'react'

// JSX = Mistura html com javascript
const App = () => {
  const hello = "Hello React"

  return (
    <div>
      <h1>{hello}</h1>
      <h2>{3 * 2}</h2>
      <p>Meu primeiro projeto com ReactJS</p>
    </div>)
}

export default App