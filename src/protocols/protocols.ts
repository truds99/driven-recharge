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