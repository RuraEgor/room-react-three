import { IWall, IWallParam } from '../models/models'
import {Vector3} from 'three'

export function useWallsParam(wallsParams: IWall[]) {
	
	const masWalls: IWallParam[] = wallsParams.map( (wall: IWall) => {
		
		const wallParam: IWallParam = {
			id: 0,
			param: [1, 1, 1, 1, 1, 1],
			name: '',
			position: [0, 0, 0],
			rotation: [0, 0, 0],
		}
		
		wallParam.id = wall.id
		
		let vector1: Vector3 = new Vector3().fromArray(wall.length[0])
		let vector2: Vector3 = new Vector3().fromArray(wall.length[1])
		
		let subVector: Vector3 = new Vector3().subVectors(
			vector1,
			vector2
		)
		
		const vectorLength: number = subVector.length()
		
		let vectorLengthSide: number = 0
		if (new Vector3(1, 0, 0).dot(subVector) == 0) {
			vectorLengthSide = subVector.length() + wall.width
		} else {
			vectorLengthSide = subVector.length() - wall.width
		}
		
		let middle: Vector3 = new Vector3().subVectors(vector1, subVector.setLength(vectorLength/2));
		
		wallParam.param = [vectorLengthSide, wall.height, wall.width, 10, 10, 10]
		
		if (wall.side) wallParam.name = wall.side
		
		wallParam.position = [middle.x, wall.height / 2, middle.z]
		wallParam.rotation = [0, 0, 0]
		
		if (
			new Vector3(1, 0, 0).normalize().dot(subVector.normalize()) == 0 &&
			new Vector3(0, 0, 1).normalize().dot(subVector.normalize()) == 1
		) {
			wallParam.rotation[1] = new Vector3(0, 0, 0).normalize().angleTo(subVector.normalize())
			wallParam.rotation[1] *= 3
		} else {
			wallParam.rotation[1] = new Vector3(1, 0, 0).normalize().angleTo(subVector.normalize())
		}
		
		return wallParam
	})
	
	return masWalls
}
