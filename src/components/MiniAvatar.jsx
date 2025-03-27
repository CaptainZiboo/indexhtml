import React, { Component } from 'react'
import * as THREE from 'three'
import Avatar from './Avatar'

const MiniAvatar = () => {
 
    return (
      <div className="absolute bottom-0 right-0 h-150 w-300  pt-8 ">
        <div className="text-black bg-[#367bb3]">MiniAvatar</div>
        <Avatar width={300} height={400} />
      </div>
    );
  
}

export default MiniAvatar;