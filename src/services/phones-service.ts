import { getPhonesBySomethingRep, postPhoneRep } from "../repositories/phones-repository";
import { phoneAlreadyRegisteredError, threePhonesOfDocumentError } from "../errors/errors";
import { getCustomerRep, postCustomerRep } from "../repositories/customers-repository";
import { RegisterPhoneData } from "../protocols/protocols";

export async function postPhoneService(registerData: RegisterPhoneData){

    const { name, ...phoneData } = registerData;

    const phonesOfThisDocument = (await getPhonesBySomethingRep('customer_document', registerData.customer_document))
    if (phonesOfThisDocument.rowCount === 3) throw threePhonesOfDocumentError();

    const customer = (await getCustomerRep(registerData.customer_document));
    if (!customer.rowCount) await postCustomerRep(name, registerData.customer_document);
    
    const phone = (await getPhonesBySomethingRep('number', registerData.number));
    if(phone.rows) throw phoneAlreadyRegisteredError();

    const register = await postPhoneRep(phoneData);
    return register;
}
