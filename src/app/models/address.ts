
export interface IAddress {
    _id: string,
    user: string
    country:string,
    fullName:string,
    streetAddress:string,
    city:string,
    state:string,
    zipCode:number,
    phoneNumber:string,
    
}

export interface IRespondNewAddress {
    success: boolean,
    message: string,
}

export interface IRespondAddress {
    success: boolean,
    addresses: IAddress[]
}