import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'

import { ACESFilmicToneMapping } from "three";

import Lens from '../Home/Lens'
import Items from "./ImageSlider"

const CanvasProject = () => {
   
  return (
    <Canvas
     camera={{ position: [0, 0, 20], fov: 15 }} 
     dpr={[1, 1.5]}
     gl={{
        antialias: true,
        powerPreference: "high-performance",
        toneMapping: ACESFilmicToneMapping,
        preserveDrawingBuffer: true
    }}
    onCreated={(state) => {
      state.gl.setClearColor('#000000')
    }}
    flat
     >
         <Items/>
        <Preload />
    <color args={["#000000"]} attach="background" /> 
    </Canvas>
  )
}

export default CanvasProject