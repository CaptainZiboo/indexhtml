import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/components/navbar'
import ActifOutfit from './assets/components/ActifOutfit'
import Avatar from './assets/components/Avatar'
import GrilleOutfit from './assets/components/GrilleOutfit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <div className=" mt-16 flex justify-center gap-10 ">
          <ActifOutfit />
          <Avatar />
          <GrilleOutfit />
        </div>
      </div>
    </>
  );
}

export default App
