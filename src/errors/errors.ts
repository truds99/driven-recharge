import { CustomError } from "../protocols/protocols";

export function threePhonesOfDocumentError(): CustomError {
    return {
        name: 'conflict',
        message: 'this document has already three phones'
    }
}
