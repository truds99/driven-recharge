import { getPhonesBySomethingRep, postPhoneRep } from "../repositories/phones-repository";
import { phoneAlreadyRegisteredError, threePhonesOfDocumentError } from "../errors/errors";
import { getCustomerRep, postCustomerRep } from "../repositories/customers-repository";
import { RegisterData } from "../protocols/protocols";

export async function postPhoneService(registerData: RegisterData){

    const { name, ...phoneData } = registerData;

    const phonesOfThisDocument = (await getPhonesBySomethingRep('customer_document', registerData.customer_document))
    if (phonesOfThisDocument.rowCount === 3) throw threePhonesOfDocumentError();

    const customer = (await getCustomerRep(registerData.customer_document));
    if (!customer.rowCount) await postCustomerRep(name, registerData.customer_document);
    
    const phone = (await getPhonesBySomethingRep('number', registerData.number));
    if(phone.rowCount) throw phoneAlreadyRegisteredError();

    const register = await postPhoneRep(phoneData);
    return register;
}

/* export function getCarrierName(carrierId: number) {
    let carrier: string;

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
} */