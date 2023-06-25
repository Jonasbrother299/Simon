import React from 'react'
import { Canvas,  } from '@react-three/fiber'
import {  Scroll, Preload, ScrollControls } from '@react-three/drei'

import Lens from './Lens'
import Images from './Images'
import Typography from './Typography'
import SVGScene from "./Logo"

const CanvasLens = () => {
  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 15 }}>
    {/* <Projects/> */}
    {/* <OrbitControls/> */}
      <ScrollControls damping={0.2} pages={4} distance={0.5}>
      <Lens>
        <Scroll>
        <SVGScene/>
          <Typography />
          <Images />
        
        </Scroll>
        <Scroll html>
          <div style={{ transform: 'translate3d(65vw, 192vh, 0)' }}>
            PMNDRS Pendant lamp
            <br />
            bronze, 38 cm
            <br />
            CHF 59.95
            <br />
          </div>
        </Scroll>
       
        <Preload />
      </Lens>
    </ScrollControls> 
    <color args={["#00000"]} attach="background" /> 
  </Canvas>
  )
}

export default CanvasLens