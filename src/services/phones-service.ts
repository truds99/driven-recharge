import { getPhonesBySomethingRep, postPhoneRep } from "../repositories/phones-repository";
import { phoneAlreadyRegisteredError, threePhonesOfDocumentError } from "../errors/errors";
import { getCustomerRep, postCustomerRep } from "../repositories/customers-repository";

export async function postPhoneService({name, customer_document, number, carrier_id, description }) {
    const phonesOfThisDocument = (await getPhonesBySomethingRep('customer_document', customer_document))
    if (phonesOfThisDocument.rowCount === 3) throw threePhonesOfDocumentError();

    const customer = (await getCustomerRep(customer_document));
    if (!customer.rowCount) await postCustomerRep(name, customer_document);
    
    const phone = (await getPhonesBySomethingRep('number', number));
    if(phone.rowCount) throw phoneAlreadyRegisteredError();

    await postPhoneRep(customer_document, number, carrier_id, description);
}

export function getCarrierName(carrierId: number) {
    let carrier : string;

    switch (carrierId) {
        case 1:
            carrier = 'Vivo';
            break;
        case 2:
            carrier = 'Tim';
            break;
        case 3:
            carrier = 'Oi';
            break;
        case 4:
            carrier = 'Claro';
            break;
        default:
            carrier = 'unknown carrier';
            break;
    }
    
    return carrier;
}