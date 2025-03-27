import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import ActifOutfit from './components/ActifOutfit'
import Avatar from './components/Avatar'
import GrilleOutfit from './components/GrilleOutfit'

function App() {

  return (
    <>
      <div>

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
