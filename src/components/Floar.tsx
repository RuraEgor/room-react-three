import { Vector2, Shape, Color } from 'three';
import { ICoord } from '../models/models';

interface IFloarProps {
	floarThick: number
	width: number
	pointCoords: ICoord[]
}

export default function Floar({floarThick, width, pointCoords}: IFloarProps) {
	const colorFloar: Color = new Color(0.6, 0.6, 0.6)
	const extrudeSettings: {bevelEnabled: boolean, depth: number } = {
		bevelEnabled: false,
		depth: floarThick,
	}
	
	const masFloar: Vector2[] = pointCoords.map( el => {
		const x: number = Math.sign(el[0]) > 0 ? el[0]+width/2 : el[0]-width/2
		const y: number = Math.sign(el[2]) > 0 ? el[2]+width/2 : el[2]-width/2
		
		return new Vector2(x, y)
	})
	const outline: Shape = new Shape(masFloar);
	
	return (
		<mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
			<extrudeGeometry args={[outline, extrudeSettings]} />
		    <meshBasicMaterial color={colorFloar} />
		</mesh>
	)
}
