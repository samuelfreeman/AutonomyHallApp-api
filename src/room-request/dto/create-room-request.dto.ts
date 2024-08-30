export enum RequestStatus {
    Rejected = "Rejected",
    Approved = 'Approved',
    Pending = 'Pending'

}


export class CreateRoomRequestDto {
    StudentId: string
    status: RequestStatus
}
