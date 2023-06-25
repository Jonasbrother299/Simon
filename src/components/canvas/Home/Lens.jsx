import {Scene} from 'three'
import { useRef, useState } from 'react'
import { createPortal, useFrame, useThree } from '@react-three/fiber'
import { useFBO, useGLTF, MeshTransmissionMaterial } from '@react-three/drei'
import { easing } from 'maath'


export default function Lens({ children, damping = 0.15, ...props }) {
    const ref = useRef()
    const { nodes } = useGLTF('/Blob.glb')
    const buffer = useFBO()
    const viewport = useThree((state) => state.viewport)
    const [scene] = useState(() => new Scene())
    useFrame((state, delta) => {
  
      const viewport = state.viewport.getCurrentViewport(state.camera, [0, 0, 15])
      easing.damp3(
        ref.current.position,
        [(state.pointer.x * viewport.width) / 2, (state.pointer.y * viewport.height) / 2, 15],
        damping,
        delta
      )
     
      state.gl.setRenderTarget(buffer)
      state.gl.setClearColor('#000000')
      state.gl.render(scene, state.camera)
      state.gl.setRenderTarget(null)
    })
    return (
      <>
        {createPortal(children, scene)}
        <mesh scale={[viewport.width, viewport.height, 1]}>
          <planeGeometry />
          <meshBasicMaterial map={buffer.texture} />
        </mesh>
        <mesh scale={0.25} ref={ref} rotation-x={Math.PI / 2} geometry={nodes.Sphere.geometry} {...props}>
          <MeshTransmissionMaterial buffer={buffer.texture} 
          ior={1.15} 
          thickness={0.7} 
          anisotropy={0.1} 
          chromaticAberration={0.1} 
          />
        </mesh>
      </>
    )
  }