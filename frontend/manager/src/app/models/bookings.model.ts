export class Booking {

  constructor(public idBooking: number, public idCustomer: number, public idPartner: number, public hoursBooking: string, public dateBooking: string, public statusBooking: string, public formulaBooking: string, public dateReturn: string, public hoursReturn: string, public idCar: number, public idPickupAddress: number, public idReturnAddress: number) {}
}
