import React from 'react'

import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'
import { useLoader, } from '@react-three/fiber'

function SVGScene() {
  const data = useLoader(SVGLoader, '/Logo.svg')
  const shapes = data.paths.flatMap((g) => g.toShapes(true))

  return (
    <>
      {shapes.map((shape, index) => (
        <mesh rotation={[0 , 0, 0]} key={index} scale={[-0.001, 0.001, 0.001]} position={[-0.5, 1.7, 0.3]}>
          <shapeGeometry args={[shape]} />
        </mesh>
      ))}
    </>
  )
}

export default SVGScene;