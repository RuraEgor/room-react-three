import { ICoord, IWall } from '../models/models';

export const pointCoords: ICoord[] = [
	[5, 0, 5],
	[5, 0, -5],
	[-5, 0, -5],
	[-5, 0, 5],
]

export const pointCoords2: ICoord[] = [
	[5, 0, 5],
	[5, 0, -5],
	[-3, 0, -5],
	[-3, 0, -3],
	[-6, 0, -3],
	[-6, 0, 5],
]

const width: number = 0.4
const height: number = 3

export const wallsParams: IWall[] = [
	{
		id: 1,
		length: [pointCoords[1], pointCoords[0]],
		width,
		height,
		side: 'right',
	},
	{
		id: 2,
		length: [pointCoords[2], pointCoords[1]],
		width,
		height,
		side: 'back',
	},
	{
		id: 3,
		length: [pointCoords[3], pointCoords[2]],
		width,
		height,
		side: 'left',
	},
	{
		id: 4,
		length: [pointCoords[0], pointCoords[3]],
		width,
		height,
		side: 'front',
	},
]

export const wallsParams2: IWall[] = [
	{
		id: 1,
		length: [pointCoords2[1], pointCoords2[0]],
		width,
		height,
		side: 'right',
	},
	{
		id: 2,
		length: [pointCoords2[2], pointCoords2[1]],
		width,
		height,
		side: 'back',
	},
	{
		id: 3,
		length: [pointCoords2[3], pointCoords2[2]],
		width,
		height,
		side: 'left',
	},
	{
		id: 4,
		length: [pointCoords2[4], pointCoords2[3]],
		width,
		height,
		side: 'front',
	},
	{
		id: 5,
		length: [pointCoords2[5], pointCoords2[4]],
		width,
		height,
		side: 'front',
	},
	{
		id: 6,
		length: [pointCoords2[0], pointCoords2[5]],
		width,
		height,
		side: 'front',
	},
]
