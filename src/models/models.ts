export type ICoord = [number, number, number]

export interface IWall {
	id: number
	length: [ICoord, ICoord]
	width: number
	height: number
	side?: string
}

export interface IWallParam {
	id: number
	param: number[]
	name: string
	position: number[]
	rotation: number[]
}
