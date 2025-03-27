import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import ActifOutfit from './components/ActifOutfit'
import Avatar from './components/Avatar'
import GrilleOutfit from './components/GrilleOutfit'
import MiniAvatar from './components/MiniAvatar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <div className=" mt-16 flex justify-center gap-10  bg-[#e5f4fe]">
          <ActifOutfit />
          {/* <Avatar width={350} height={500} /> */}
          <GrilleOutfit />
        </div>
      </div>
      <MiniAvatar></MiniAvatar>
    </>
  );
}

export default App
