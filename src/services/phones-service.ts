import { getPhoneRep, postPhoneRep } from "../repositories/phones-repository";
import { getPhonesByDocumentRep } from "../repositories/phones-repository";
import { phoneAlreadyRegisteredError, threePhonesOfDocumentError } from "../errors/errors";
import { getCustomerRep, postCustomerRep } from "../repositories/customers-repository";

export async function postPhoneService({name, customer_document, number, carrier_id, description }) {
    const phonesOfThisDocument = (await getPhonesByDocumentRep(customer_document))
    if (phonesOfThisDocument.rowCount === 3) throw threePhonesOfDocumentError();

    const customer = (await getCustomerRep(customer_document));
    if (!customer.rowCount) await postCustomerRep(name, customer_document);
    
    const phone = (await getPhoneRep(number));
    if(phone.rowCount) throw phoneAlreadyRegisteredError();

    await postPhoneRep(customer_document, number, carrier_id, description);
}