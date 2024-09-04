import { CustomError } from "../protocols/protocols";

export function threePhonesOfDocumentError(): CustomError {
    return {
        name: 'conflict',
        message: 'this document has already three phones'
    }
}

export function phoneAlreadyRegisteredError(): CustomError {
    return {
        name: 'conflict',
        message: 'this phone is already registered'
    }
}
