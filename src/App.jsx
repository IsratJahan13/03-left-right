import { useState } from "react"

function App() {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () => {
    const newClicks = { 
      ...clicks,    // ...clicks object get the value of clicks.left+1.  { ...clicks, right: clicks.right + 1 } creates a copy of the clicks object where the value of the right property is increased by one.
      left: clicks.left + 1, 
    }
    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = { 
      ...clicks, 
      right: clicks.right + 1 
    }
    setClicks(newClicks)
  }

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  )
}

export default App
