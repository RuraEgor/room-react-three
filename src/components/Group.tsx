import Floar from './Floar'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { Texture, RepeatWrapping, MeshBasicMaterial, Color } from 'three'
import { useWallsParam } from '../hooks/useWallsParam'
import { ICoord, IWall, IWallParam } from '../models/models'

interface IGroup {
	floarThick: number
	width: number
	wallsParams: IWall[]
	pointCoords: ICoord[]
}

export default function Group({floarThick, width, wallsParams, pointCoords}: IGroup) {
	const textBrick: Texture = useLoader(TextureLoader, 'bricks.jpg')
	textBrick.wrapS = textBrick.wrapT = RepeatWrapping
	textBrick.repeat.set( 5, 2 )
	
	const color: Color = new Color(0.5, 0.5, 0.5)
	
	const masWalls: IWallParam[] = useWallsParam(wallsParams)
	
	return (
		<group>
			{masWalls.map( (el: any) => (
				<mesh
					key={el.id}
					position={el.position}
					rotation={el.rotation}
					material={[
						new MeshBasicMaterial({ color }),
						new MeshBasicMaterial({ color }),
						new MeshBasicMaterial({ color }),
						new MeshBasicMaterial({ color }),
						new MeshBasicMaterial({ map: textBrick }),
						new MeshBasicMaterial({ map: textBrick }),
					]}>
					<boxGeometry args={el.param} />
				</mesh>)
			)}
			<Floar floarThick={floarThick} width={width} pointCoords={pointCoords} />
		</group>
	)
}
