export enum RoomStatus {
    Vacant = 'Vacant',
    Occupied = 'Occupied',
    PartiallyOccupied = 'Partially_Occupied'
}
export class CreateRoomDto {
    roomnumber: number
    status: RoomStatus
    blockName: string
    hallId?: string

}