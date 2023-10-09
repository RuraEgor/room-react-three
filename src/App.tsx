import {Suspense} from 'react'
import './App.scss'
import {Color} from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Group from './components/Group'
import { wallsParams, pointCoords } from './data/coords'
// import { wallsParams2 as wallsParams, pointCoords2 as pointCoords } from './data/coords'  // the second option form room

function App() {
    const floarThick: number = 0.4
    const width: number = 0.4
    const background: Color = new Color(0x263238)
    
    return (
        <div className="App">
          <Suspense fallback={null}>
            <Canvas camera={{position: [0, 10, 15] }} linear flat>
                <color
                    attach="background"
                    args={[background.r, background.g, background.b]}
                />
              <Group floarThick={floarThick} width={width} pointCoords={pointCoords} wallsParams={wallsParams} />
              <OrbitControls />
            </Canvas>
          </Suspense>
        </div>
  );
}

export default App;
