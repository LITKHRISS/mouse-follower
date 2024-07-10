import { useEffect, useState } from 'react'

function App() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    console.log('efect', {enabled})
  }, [enabled])

  return (
    <>
      <h3>Project 3</h3>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Deactivate' : 'Activate'} pointer follower
      </button>
    </>
  )
}

export default App
