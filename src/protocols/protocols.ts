export type CustomError = {
    name: string;
    message: string;
} & Error;

export type RegisterData = {
    name: string, 
    customer_document: string, 
    number: string, 
    carrier_id: number, 
    description: string
}

export type PhoneData = Omit<RegisterData, "name">

export type Phone = PhoneData & { id: number };
