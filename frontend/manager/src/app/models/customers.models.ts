export class Customer {

  constructor(public idCustomer: number,
                     public firstNameCustomer: string,
                     public lastNameCustomer: string,
                     public addressTakingCareCustomer: string,
                     public zipTakingCareCustomer: number,
                    public cityTakingCareCustomer: string,
                    public phoneCustomer:string,
                    public mailCustomer: string,
                    public passwordCustomer: string,
                    public addressReturnCustomer?: string,
                    public zipReturnCustomer?: number,
                    public cityReturnCustomer?: string,
                    public partnerFavoriteCustomer?: string,
                    public dateCustomer?: string ) {}
}
