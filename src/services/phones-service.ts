import { postPhoneRep } from "../repositories/phones-repository";


export async function postPhoneService({ customer_document, number, carrier_id, description }) {
    
    await postPhoneRep(customer_document, number, carrier_id, description);

}