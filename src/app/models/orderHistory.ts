export interface ICapacityOrder {
    id:string
}
export interface IColorOrder{
    _id :string,
    color:string,
    image: string
}
export interface IProductIDOrder{
    capacities : ICapacityOrder[],
    _id: string,
    name : string,
    priceOnSales: number,
    priceOnPurchase: number,
    description: string,
    installment: boolean,
    oldPrice : number,
    bonusTitle: string,
    bonusContent: string,
    isExists: boolean,
    screen: string,
    operatingSystem: string,
    frontCamera: string,
    backCamera: string,
    CPU : string,
    RAM : string,
    batteryCapacity: string,
    SIM : string
    colors : IColorOrder[]
}

export interface IProductOrder{
    productID: IProductIDOrder,
    quantity: number,
    capacity: number,
    color: string,
    capacityCostPlus: number,
    colorCostPlus: number,
    photo: string
}

export interface IProductOrderHistory{
    products : IProductOrder[]
    estimatedDelivery:string,
    _id:string
}

export interface IResponseOrderHistory {
    success : boolean,
    orders : IProductOrderHistory[]
}