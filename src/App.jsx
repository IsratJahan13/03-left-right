import { useState } from "react"
import History from "./components/History"
import Button from "./components/Button"

function App() {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const [value, setValue] = useState(10)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }

  const hello = (who) => {
    return () => {
      console.log('hello ', who)
    }
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text = 'left' />
      <Button handleClick={handleRightClick} text = 'right' />
      {right}
      <History allClicks = {allClicks} />
      <p>total {total}</p>
      <hr></hr>
      {value}
      <button onClick={hello('world')}>button</button>
      <button onClick={hello('react')}>button</button>
      <button onClick={hello('function')}>button</button>
    </div>
  )
}

export default App
