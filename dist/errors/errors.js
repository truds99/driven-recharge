"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.threePhonesOfDocumentError = threePhonesOfDocumentError;
exports.phoneAlreadyRegisteredError = phoneAlreadyRegisteredError;
exports.invalidParametersError = invalidParametersError;
exports.notFoundError = notFoundError;
function threePhonesOfDocumentError() {
    return {
        name: 'conflict',
        message: 'this document has already three phones'
    };
}
function phoneAlreadyRegisteredError() {
    return {
        name: 'conflict',
        message: 'this phone is already registered'
    };
}
function invalidParametersError() {
    return {
        name: 'unprocessable_entity',
        message: 'invalid parameters'
    };
}
function notFoundError(entity) {
    return {
        name: 'not_found',
        message: "".concat(entity, " not found")
    };
}
