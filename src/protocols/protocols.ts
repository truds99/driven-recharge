export type CustomError = {
    name: string;
    message: string;
} & Error;

export type RegisterPhoneData = {
    name: string, 
    customer_document: string, 
    number: string, 
    carrier_id: number, 
    description: string
}

export type PhoneData = Omit<RegisterPhoneData, "name">

export type Phone = PhoneData & { id: number };

export type Customer = {
    id: number,
    name: string,
    document: string
}

export type RechargeData = {
    phone_id: number,
    value: number
}

export type Recharge = RechargeData & { id: number };

export type Summary = {
    document: string,
    phones: {
        number: string,
        description: string,
        carrier: {
            name: string,
            code: number
        }
        recharges: {
            id: number
            value: number
        } []
    } []
}