export class Partner {

  constructor(public idPartner: number,
    public namePartner: string,
    public numberAddressPartner: string,
    public typeAddressPartner: number,
    public nameAddressPartner: string,
    public complementAddressPartner: string,
    public zipAddressPartner: number,
    public cityAddresPartner: string,
    public phonePartner: string,
    public statusPartner: string,
    public mailPartner: number,
    public nameBilling: string,
    public siretPartner: string,
    public numberAddressBilling: string,
    public typeAddressBilling: string,
    public nameAddressBilling: string,
    public complementAddressBilling: string,
    public zipAddressBilling: number,
    public cityAddressBilling: string,
    public datePartner?: string) {}
}
