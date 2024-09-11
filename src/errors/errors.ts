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

export function invalidParametersError(): CustomError {
    return {
        name: 'unprocessable_entity',
        message: 'invalid parameters'
    }
}

export function notFoundError(entity: string): CustomError {
    return {
        name: 'not_found',
        message: `${entity} not found`
    }
}

