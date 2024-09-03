import { postPhoneRep } from "../repositories/phones-repository";
import { getPhonesByDocumentRep } from "../repositories/phones-repository";
import { threePhonesOfDocumentError } from "../errors/errors";
import { getCustomerRep, postCustomerRep } from "../repositories/customers-repository";

export async function postPhoneService({name, customer_document, number, carrier_id, description }) {
    const phonesOfThisDocument = (await getPhonesByDocumentRep(customer_document))
    if (phonesOfThisDocument.rowCount >= 3) throw threePhonesOfDocumentError();

    const customer = (await getCustomerRep(customer_document));
    if (!customer.rowCount) await postCustomerRep(name, customer_document);

    await postPhoneRep(customer_document, number, carrier_id, description);
}