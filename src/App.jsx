import { useState } from "react"
import { useEffect } from "react"

export function App() {

  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon`)
      .then((response) => response.json())
      .then((actualData) => setItems(actualData.results))
  }, [])


  return (
    <div>
      Pokemon Listagem<br></br>

      {items.map(item => 
        <li>{item.name}</li>
      )}
    </div>

    
  )
}
