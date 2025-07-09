import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [cards, setCards] = useState([])

  const fetchdata = async () => {
    let a = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await a.json();
    setCards(data);

    console.log(data);
  }



  useEffect(() => {
    fetchdata();
  }, []);



  return (
    <>
      <div className="container">
        {cards.map((cards) => {
          return <div className="card">
            <h1>{cards.title}</h1>
            <p>{cards.body}</p>
            <p>{cards.userId}</p>
          </div>
        })}
      </div>
    </>
  )
}

export default App
