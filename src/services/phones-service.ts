import { postPhoneRep } from "../repositories/phones-repository";


export async function postPhoneService({name, customer_document, number, carrier_id, description }) {
    
    await postPhoneRep(name, customer_document, number, carrier_id, description);
}