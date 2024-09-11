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
    if(phone.rowCount) throw phoneAlreadyRegisteredError();

    const register = await postPhoneRep(phoneData);
    return register;
}

export function getCarrier(id: number) {
    switch (id) {
        case 1:
          return { name: 'Vivo', code: 15 };
        case 2:
          return { name: 'Tim', code: 41 };
        case 3:
          return { name: 'Oi', code: 31 };
        case 4:
          return { name: 'Claro', code: 21 };
        default:
          return { name: 'Unknown carrier', code: 0 };
      }
}
